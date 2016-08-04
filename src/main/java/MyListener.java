package main.java;


import org.apache.log4j.Logger;

import javax.servlet.ServletInputStream;
import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;

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
        logger.info("> Listener: Характеристики полученного запроса:");
        HttpServletRequest req = (HttpServletRequest) servletRequestEvent.getServletRequest();
        logger.info("---------------------------------------------------------");
        logger.info("> Listener: Характеристики полученного запроса:");
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


        Enumeration<String> stringEnumeration = req.getParameterNames();
        while (stringEnumeration.hasMoreElements()) {
            String paramName = (String) stringEnumeration.nextElement();
            String[] stringValue = req.getParameterValues(paramName);
            for (int i = 0; i < stringValue.length; i++) {
                logger.info("> Listener: getParameterNames : Parametr - "+ paramName+"[" + i + "] : " + stringValue[i]);
            }
        }

        Enumeration<String> stringHeadersName = req.getHeaderNames();
        while (stringHeadersName.hasMoreElements()) {
            String paramName = (String) stringHeadersName.nextElement();
            String stringHeader = req.getHeader(paramName);
            Long LongValue = req.getDateHeader(stringHeader);
            int intValue = req.getIntHeader(stringHeader);
            logger.info("> Listener: getHeaderNames : getHeader - "+ paramName + " : " + stringHeader + "; getDateHeader : " + LongValue + "; getIntHeader : " + intValue);
        }

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

        //читаем файл
        //Если POST и SUBMIT
        if(req.getMethod().equals("POST")) {

            try {
                ServletInputStream servletInputStream = req.getInputStream();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

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
}
