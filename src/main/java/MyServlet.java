package main.java;

import org.apache.log4j.Logger;

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
    final static Logger logger = Logger.getLogger(MyServlet.class);

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        //Если POST и SUBMIT
        if(req.getMethod().equals("POST") && req.getContentType().contains("multipart/form-data")) {

            try {
                for (Part part: req.getParts()) {
                    logger.info("Input name - " + part.getName());

                    InputStream is = part.getInputStream();

                    //Получаем количество байт доступных для чтения
                    int len = is.available();
                    //Создаем пустой массив tempbyte размером len
                    byte[] tempbyte = new byte[len];

                    //Читаем из потока(InputStream) в массив tempbyte
                    is.read(tempbyte);

                    if (part.getContentType() != null) {

                        String path_config = req.getServletContext().getRealPath("/");

                        String file_name="";
                        for (String content : part.getHeader("content-disposition").split(";")) {
                            if (content.trim().startsWith("filename")) {
                                file_name = content.substring(content.indexOf('=') + 1).trim().replace("\"", "");
                            }
                        }

                        OutputStream os = new FileOutputStream(path_config + file_name);
                        os.write(tempbyte);
                        os.close();

                    }
                    is.close();
                }
            } catch (IOException e) {
                logger.info("IOException при чтении parts");
                e.printStackTrace();
            } catch (ServletException e) {
                logger.info("ServletException при чтении parts");
                e.printStackTrace();
            }

        }

    }

}
