package main.java;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

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
        }

    }


}
