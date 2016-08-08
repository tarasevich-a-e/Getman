package main.java;


import org.apache.log4j.Logger;

import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;
import java.io.*;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Vector;

/**
 * Created by atarasevich on 01.08.16.
 */
public class MyListener implements ServletRequestListener {
    final static Logger logger = Logger.getLogger(MyListener.class);

    @Override
    public void requestDestroyed(ServletRequestEvent servletRequestEvent) {

    }

    @Override
    public void requestInitialized(ServletRequestEvent servletRequestEvent) {
        logger.info("------------------------------------------------------------------------------------------------");
        logger.info("------------------------------------------------------------------------------------------------");
        logger.info("------------------------------------------------------------------------------------------------");
        logger.info("> Listener: Характеристики полученного запроса:");
        HttpServletRequest req = (HttpServletRequest) servletRequestEvent.getServletRequest();
        /*try {
            req.setCharacterEncoding("UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }*/
        logger.info("> Listener: тип и версия протокола(getProtocol) : " + req.getProtocol());
        logger.info("> Listener: метод(getMethod) : " + req.getMethod());
        logger.info("> Listener: host(getServerName) : " + req.getServerName());
        logger.info("> Listener: ip(getRemoteAddr) : " + req.getRemoteAddr());
        logger.info("> Listener: port(getServerPort) : " + req.getServerPort());
        logger.info("> Listener: path(getRequestURI) : " + req.getRequestURI());
        logger.info("> Listener: отправлено с порта(getRemotePort) : " + req.getRemotePort());
        logger.info("> Listener: getRemoteUser : " + req.getRemoteUser());
        logger.info("> Listener: getQueryString : " + req.getQueryString());
        logger.info("> Listener: getScheme : " + req.getScheme());
        logger.info("> Listener: getPathInfo : " + req.getPathInfo());
        logger.info("> Listener: getContextPath() : " + req.getContextPath());
        logger.info("> Listener: getPathTranslated() : " + req.getPathTranslated());
        logger.info("> Listener: getRequestedSessionId() : " + req.getRequestedSessionId());
        logger.info("> Listener: getRequestedSessionId() : " + req.getRequestedSessionId());
        logger.info("> Listener: getRequestURI() : " + req.getRequestURI());
        logger.info("> Listener: getRequestURL() : " + req.getRequestURL());
        logger.info("> Listener: getServletPath() : " + req.getServletPath());
        logger.info("> Listener: isRequestedSessionIdFromCookie() : " + req.isRequestedSessionIdFromCookie());
        logger.info("> Listener: isRequestedSessionIdFromURL() : " + req.isRequestedSessionIdFromURL());
        logger.info("> Listener: isRequestedSessionIdValid() : " + req.isRequestedSessionIdValid());
        logger.info("> Listener: getContentType() : " + req.getContentType());
        logger.info("> Listener: getAuthType() : " + req.getAuthType());
        logger.info("> Listener: ");
        logger.info("> Listener: ------------------------------------ParameterNames----------------------------------------");
        Enumeration<String> stringEnumeration = req.getParameterNames();
        while (stringEnumeration.hasMoreElements()) {
            String paramName = (String) stringEnumeration.nextElement();
            String[] stringValue = req.getParameterValues(paramName);
            for (int i = 0; i < stringValue.length; i++) {
                logger.info("> Listener: getParameterNames : Parametr - "+ paramName+"[" + i + "] : " + stringValue[i]);
            }
        }
        logger.info("> Listener: ");
        logger.info("> Listener: ------------------------------------HeaderNames----------------------------------------");
        Enumeration<String> stringHeadersName = req.getHeaderNames();
        while (stringHeadersName.hasMoreElements()) {
            String paramName = (String) stringHeadersName.nextElement();
            String stringHeader = req.getHeader(paramName);
            Long LongValue = req.getDateHeader(stringHeader);
            int intValue = req.getIntHeader(stringHeader);
            logger.info("> Listener: getHeaderNames : getHeader - "+ paramName + " : " + stringHeader + "; getDateHeader : " + LongValue + "; getIntHeader : " + intValue);
        }

        logger.info("> Listener: ");
        logger.info("> Listener: ------------------------------------Cookies--------------------------------------------");
        if(req.getCookies() != null) {
            Cookie[] cookies = req.getCookies();
            for (int i = 0; i < cookies.length; i++) {
                logger.info("> Listener: getCookies : Cookies.getComment - [" + i + "] : " + cookies[i].getComment());
                logger.info("> Listener: getCookies : Cookies.getDomain - [" + i + "] : " + cookies[i].getDomain());
                logger.info("> Listener: getCookies : Cookies.getName - [" + i + "] : " + cookies[i].getName());
                logger.info("> Listener: getCookies : Cookies.getPath - [" + i + "] : " + cookies[i].getPath());
                logger.info("> Listener: getCookies : Cookies.getValue - [" + i + "] : " + cookies[i].getValue());
                logger.info("> Listener: getCookies : Cookies.getMaxAge - [" + i + "] : " + cookies[i].getMaxAge());
                logger.info("> Listener: getCookies : Cookies.getSecure - [" + i + "] : " + cookies[i].getSecure());
                logger.info("> Listener: getCookies : Cookies.getVersion - [" + i + "] : " + cookies[i].getVersion());
            }
        }

        logger.info("> Listener: ");
        logger.info("> Listener: ----------------------------------httpSession------------------------------------------");
        HttpSession httpSession = req.getSession();
        Enumeration<String> stringEnumeration1 = httpSession.getAttributeNames();
        while (stringEnumeration1.hasMoreElements()) {
            String paramName = (String) stringEnumeration1.nextElement();
            Object ob = req.getAttribute(paramName);
            logger.info("> Listener: getAttribute : Attribute - "+ paramName + " : " + ob.toString());
        }
        logger.info("> Listener: httpSession.getCreationTime() : " + httpSession.getCreationTime());
        logger.info("> Listener: httpSession.getId() : " + httpSession.getId());
        logger.info("> Listener: httpSession.getLastAccessedTime() : " + httpSession.getLastAccessedTime());
        logger.info("> Listener: httpSession.getMaxInactiveInterval() : " + httpSession.getMaxInactiveInterval());

        logger.info("> Listener: ");
        logger.info("> Listener: --------------------------------------File---------------------------------------------");
        //Если POST и SUBMIT
        if(req.getMethod().equals("POST") && req.getContentType().contains("multipart/form-data")) {

            /*
            InputStreamReader isr = new InputStreamReader(conn.getInputStream(), "windows-1251");
            BufferedReader br = new BufferedReader(isr);
            */
            StringBuffer data = new StringBuffer();
            //ServletInputStream in = null;
            InputStreamReader in;

            try {
                //in = req.getInputStream();
                in = new InputStreamReader(req.getInputStream(), "ISO-8859-1"); //windows-1251
                //BufferedInputStream bf = new BufferedInputStream((InputStream)in);
                InputStreamReader bf = in;

                int bit;
                while((bit = bf.read()) != -1)
                {
                    data.append((char)bit);
                }


            } catch (IOException e) {
                e.printStackTrace();
            }

            String all_data = new String(data);

            //Получаем boundary
            String boundary = extractBoundary(req.getHeader("Content-Type"));

            FileInfo [] fileInfos = extractFiles(all_data, boundary);

            for (int i = 0; i < fileInfos.length; i++) {
                fileInfos[i].SaveFile(all_data, System.getProperty("user.dir") + System.getProperty("file.separator"));
            }
            logger.info("> Listener: File save : " + System.getProperty("user.dir") + System.getProperty("file.separator"));
        }

        logger.info("> Listener: ");
        logger.info("> Listener: --------------------------------------QueryString---------------------------------------------");
        if(req.getQueryString() != null) {
            String bufferedReader = req.getQueryString();
            String[] pari;
            HashMap<String, String> stringHashMap = new HashMap<String, String>();
            if (bufferedReader.equals("") == false) {
                pari = bufferedReader.split("&");
                for (int i = 0; i < pari.length; i++) {
                    int pos = pari[i].indexOf("=");
                    stringHashMap.put(pari[i].substring(0, pos), pari[i].substring(pos + 1, pari[i].length()));
                }
            }
            logger.info("> Listener: getQueryString() : " + stringHashMap);
        }

        logger.info("> Listener: ");
        logger.info("> Listener: -----------------------------------------Reader-----------------------------------------------");
        BufferedReader breader = null;
        try {
            breader = req.getReader();
        } catch (Exception e) {
            logger.info("> Listener: Ошибка при чтении POST-запроса");
        }

        if(breader != null){
            StringBuffer sb = new StringBuffer();
            String line = null;
            try {
                while ((line = breader.readLine()) != null) {
                    sb.append(line);
                }
            } catch (Exception e) {
                logger.info("> Listener: Ошибка при чтении POST-запроса");
            }
            logger.info("> Listener: getReader() : " + sb.toString());
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
