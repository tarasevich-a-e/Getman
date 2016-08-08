package main.java;

import java.io.*;

/**
 * Created by atarasevich on 05.08.16.
 */
public class FileInfo {

    public String filename; // Имя файла
    public int start_index; // Индекс начала файла в буфере
    public int last_index; // Индекс конца файла в буфере

    ///////////////////////////////КОНСТРУКТОР///////////////////////////////////////////////////////
    public FileInfo(String filename, int start_index, int last_index) {
        this.filename = filename;
        this.start_index = start_index;
        this.last_index = last_index;
    }

    ///////////////////////////////СОХРАНИТЬ ФАЙЛ///////////////////////////////////////////////////
    public void SaveFile(String buff, String directory) {

        if (!filename.equals("NO FILE")) {

            File file = new File(directory + filename);
            /*
            try {
                FileOutputStream fos = new FileOutputStream(file);
                int length = last_index - start_index;
                fos.write(buff.getBytes(),start_index, length);
                fos.close();
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
            */
            String buff2 = buff.substring(1013,1200);

            Writer out = null;
            try {
                int length = last_index - start_index;
                out = new BufferedWriter(new OutputStreamWriter( new FileOutputStream(file), "ISO-8859-1")); //windows-1251
                out.write(buff,start_index, length);
                out.close();
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }


        }

    }


}
