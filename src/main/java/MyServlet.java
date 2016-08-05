package main.java;

import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.*;
import java.util.Enumeration;
import java.util.Vector;

/**
 * Created by atarasevich on 05.08.16.
 */
@MultipartConfig
public class MyServlet extends HttpServlet {


    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        //Если POST и SUBMIT
        if(req.getMethod().equals("POST") && req.getContentType().contains("multipart/form-data")) {

            ServletInputStream in = req.getInputStream();
            BufferedInputStream bf = new BufferedInputStream((InputStream)in);
            StringBuffer data = new StringBuffer();
            int bit;
            while((bit = bf.read()) != -1)
            {
                data.append((char)bit);
            }

            String all_data = new String(data);

            //Получаем boundary
            String boundary = extractBoundary(req.getHeader("Content-Type"));

            FileInfo [] fileInfos = extractFiles(all_data, boundary);

            for (int i = 0; i < fileInfos.length; i++) {
                fileInfos[i].SaveFile(all_data, System.getProperty("user.dir") + System.getProperty("file.separator"));
            }

        }

    }

    //////////////////////////////////////////ДЕЛИМ ЗАПРОС НА ЧАСТИ///////////////////////////////
    private FileInfo[] extractFiles(String buff, String boundary) {
        //Позиция найденного boundary
        int index_boundary = 0;
        //Первый индекс вхождения boundary в буффер
        int perv_index_bound = 0;
        //Итератор шагов
        int i = 0;
        //Для временного хранения частей сообщения
        Vector buff_vec = new Vector();

        while ((index_boundary = buff.indexOf(boundary, index_boundary)) != -1) {

            //Начинаем обработку со второго вхождения boundary в буффер
            if(i != 0) {
                //Выделяем информацию по ограничению boundary в первого заголовка + содержимого
                FileInfo fileInfo = new FileInfo("NO FILE", perv_index_bound, index_boundary - 2); //Убираем два последних байта стоящих перед boundary ({10,13})

                extractData(fileInfo, buff.substring(perv_index_bound, index_boundary)); //Передаем объект для сбора информации о файле и текст ограниченный boundary
                buff_vec.addElement(fileInfo); // Сохраняем ссылку на объект
            }

            index_boundary += boundary.length(); // Добавляем к индексу вхождения boundary его длину
            perv_index_bound = index_boundary; // Сохраняем первое вхождение boundary
            i++; // делаем шаг итерации
        }

        // i-1 должно равняться buff_vec.capacity();

        FileInfo[] Data = new FileInfo[i-1];
        Enumeration enumer = buff_vec.elements();
        i=0;
        while (enumer.hasMoreElements()) {
            Data[i] = (FileInfo) enumer.nextElement();
            i++;
        }

        return Data;
    }

    //////////////////////////////////////////ВЫДЕЛЯЕМ ЗАГОЛОВОК///////////////////////////////
    private void extractData(FileInfo fileInfo, String buffer) {

        //Выделяем заголовок
        char[] ch = {'\r','\n','\r','\n'};
        String line_ch = new String(ch);
        String header;

        int ind_pos = buffer.indexOf(line_ch,2);
        if (ind_pos != -1) {
            header = buffer.substring(0, ind_pos);
            fileInfo.filename = getFileName(header);
            fileInfo.start_index += ind_pos + 4; // 4 длина искомой строки ch
        }

    }

    //////////////////////////////////////////ПОЛУЧАЕМ ИМЯ  ФАЙЛА///////////////////////////////
    private String getFileName(String header) {

        String filename = "";
        header.toLowerCase();

        int index;

        if((index = header.indexOf("filename=")) != -1) {
            int up_index_covichki = header.indexOf((int)'"', index + 1 +9); //1+9 это длина filename= + "
            filename = header.substring(index + 1 +9, up_index_covichki);
            //вычисляетс для разных ОС последний символ сепаратор, если он присутствует
            index = filename.lastIndexOf((int)'/');
            up_index_covichki = filename.lastIndexOf((int)'\\');
            filename = filename.substring(Math.max(index, up_index_covichki) + 1);
        } else {

            filename = "NO FILE";
        }

        return filename;
    }

    //////////////////////////////////////////ИЗВЛЕКАЕМ ГРАНИЦУ РАЗДЕЛОВ//////////////////////////////
    private String extractBoundary(String header) {

        int index_bond = header.lastIndexOf("boundary="); // 9 символов в искомом слове
        String boundary = header.substring(index_bond + 9);
        boundary = "--" + boundary; //реальный boundary длиннее на два символа "--"

        return boundary;
    }

}
