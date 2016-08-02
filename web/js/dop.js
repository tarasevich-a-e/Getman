    var ind=0;
    var ind_input=0;
    var ind_headers=0;
    var flag_zagolovka=0;//1-Input;2-Headers;3-Body
    var mas_params = [];
    var ind_mas_params = 0;
    var mas_input = [];
    var ind_mas_input = 0;
    var mas_headers = [];
    var ind_mas_headers = 0;
    var mas_body = "";

    var vstavka = document.getElementById("input_block");
    var in_name = [];
    var in_value = [];
    var new_in_id = [];
    /*New version*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Function add params in to path
    function AddParamN(){

    var ind_tec = ind;
    var vstavka_div_param = document.getElementById("h2_param_path");

    ////////////////////////////////////////////////////////
    //Create div - class = ch2_param_path_1
    var div_param_path = document.createElement('div');
            div_param_path.className = "ch2_param_path_1";
            div_param_path.id = "h2_param_path_" + ind_tec;
            mas_params[ind_mas_params] = ind_tec;
            ind_mas_params++;

    ////////////////////////////////////////////////////////
    //Create div - class = cdpath_param_key
    var div_param_path_1 = document.createElement('div');
            div_param_path_1.className = "cdpath_param_key";
            div_param_path_1.id = "cdpk_" + ind_tec;

    //Create div - class = cdpath_param_value
    var div_param_path_2 = document.createElement('div');
            div_param_path_2.className = "cdpath_param_value";
            div_param_path_2.id = "cdpv_" + ind_tec;

    //Create div - class = cdpath_param_del
    var div_param_path_3 = document.createElement('div');
            div_param_path_3.className = "cdpath_param_del";
            div_param_path_3.id = "cdpd_" + ind_tec;

    ////////////////////////////////////////////////////////
    //Create input - class = cipath_param_key
    var input_param_path_1 = document.createElement('input');
            input_param_path_1.className = "cipath_param_key";
            input_param_path_1.id = "ipath_param_key_" + ind_tec;
            input_param_path_1.setAttribute('type',"text");
            input_param_path_1.setAttribute('placeholder',"key");
            div_param_path_1.appendChild(input_param_path_1);

    //Create input - class = cipath_param_value
    var input_param_path_2 = document.createElement('input');
            input_param_path_2.className = "cipath_param_value";
            input_param_path_2.id = "ipath_param_value_" + ind_tec;
            input_param_path_2.setAttribute('type',"text");
            input_param_path_2.setAttribute('placeholder',"value");
            div_param_path_2.appendChild(input_param_path_2);

    //Create input - class = cipath_param_del
    var input_param_path_3 = document.createElement('input');
            input_param_path_3.className = "cipath_param_del";
            input_param_path_3.id = "ipath_param_del_" + ind_tec;
            input_param_path_3.setAttribute('type',"button");
            input_param_path_3.setAttribute('vd',ind_tec);
            input_param_path_3.setAttribute('onclick',"DeleteParam(" + ind_tec + ")");
            input_param_path_3.value = "x";
            div_param_path_3.appendChild(input_param_path_3);

    div_param_path.appendChild(div_param_path_1);
    div_param_path.appendChild(div_param_path_2);
    div_param_path.appendChild(div_param_path_3);

    vstavka_div_param.style.height = (50 + ind_tec * 50) + 'px';
    vstavka_div_param.appendChild(div_param_path);

    ind++;
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Function delete params in to path
    function DeleteParam(id_el) {

        var id_del_el = document.getElementById("h2_param_path_" + id_el);

        id_del_el.parentNode.removeChild(id_del_el);

        //Reduce height div
        var vstavka_div_param = document.getElementById("h2_param_path");
        var t = vstavka_div_param.style.height;
        t = t.substr(0,t.length -2);
        vstavka_div_param.style.height =  (t - 50) + 'px';
    mas_params[mas_params.indexOf(id_el)] = -1;
    //ind--;
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Function select razdel (Input/Headers/Body)
    function CheckZagolovok(id_zagolovka) {
        flag_zagolovka = id_zagolovka;
        var videl_zagolovok = document.getElementById("ih3_zagolovki_" + id_zagolovka);

        videl_zagolovok.style.backgroundColor = 'rgb(70,70,70)';
        videl_zagolovok.style.color = 'rgb(255,255,255)';

        if(id_zagolovka != 1) {
            var videl_zagolovok_n = document.getElementById("ih3_zagolovki_" + 1);
            videl_zagolovok_n.style.backgroundColor = 'rgb(235, 235, 228)';
            videl_zagolovok_n.style.color = 'rgb(84, 84, 84)';
            //id=h4_zag_input
            var vidimost_razdela = document.getElementById("h4_zag_input");
            vidimost_razdela.style.display = 'none';
        } else {
            var vidimost_razdela = document.getElementById("h4_zag_input");
            vidimost_razdela.style.display = 'flex';
        }
        if(id_zagolovka != 2) {
            var videl_zagolovok_n = document.getElementById("ih3_zagolovki_" + 2);
            videl_zagolovok_n.style.backgroundColor = 'rgb(235, 235, 228)';
            videl_zagolovok_n.style.color = 'rgb(84, 84, 84)';
            //id=h4_zag_headers
            var vidimost_razdela = document.getElementById("h4_zag_headers");
            vidimost_razdela.style.display = 'none';
        } else {
            var vidimost_razdela = document.getElementById("h4_zag_headers");
            vidimost_razdela.style.display = 'inline-block';
        }
        if(id_zagolovka != 3) {
            var videl_zagolovok_n = document.getElementById("ih3_zagolovki_" + 3);
            videl_zagolovok_n.style.backgroundColor = 'rgb(235, 235, 228)';
            videl_zagolovok_n.style.color = 'rgb(84, 84, 84)';
            //id=h4_zag_body
            var vidimost_razdela = document.getElementById("h4_zag_body");
            vidimost_razdela.style.display = 'none';
        } else {
            var vidimost_razdela = document.getElementById("h4_zag_body");
            vidimost_razdela.style.display = 'flex';
        }

    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Function add new input in to blok "Input"
    function AddNewInput() {
        var ind_input_tec = ind_input;
        var vstavka_div_inp = document.getElementById("dh4_zag_input_2");

        ////////////////////////////////////////////////////////
        //Create div - class = cdh4_zag_input_20
        var div_input = document.createElement('div');
            div_input.id = "dh4_zag_input_2" + ind_input_tec;
            div_input.className = "cdh4_zag_input_20";
            mas_input[ind_mas_input] = ind_input_tec;
            ind_mas_input++;


            //Button delete block
            var div_inp_zag_1 = document.createElement('div');
                div_inp_zag_1.id = "dh4_zag_input_11" + ind_input_tec;
                div_inp_zag_1.className = "cdh4_zag_input_11";

                var inp_zag_1 = document.createElement('input');
                    inp_zag_1.id = "ih4_zag_input_11" + ind_input_tec;
                    inp_zag_1.className = "cih4_zag_input_11";
                    inp_zag_1.setAttribute('val_inp',ind_input_tec);
                    inp_zag_1.setAttribute('type',"button");
                    inp_zag_1.setAttribute('value',"-");
                    inp_zag_1.setAttribute('onclick',"DeleteInput(" + ind_input_tec + ")");

            div_inp_zag_1.appendChild(inp_zag_1);

            //Text "Input"
            var div_inp_zag_1_1 = document.createElement('div');
                div_inp_zag_1_1.id = "dh4_zag_input_14" + ind_input_tec;
                div_inp_zag_1_1.style.width = "280px";
                div_inp_zag_1_1.style.textAlign = "center";
                div_inp_zag_1_1.className = "cdh4_zag_input_1ob_text";

                var div_inp_zag_11_1 = document.createElement('div');
                    div_inp_zag_11_1.className = "inp_zag";

                    var span_zag_11 = document.createElement('span');
                        span_zag_11.innerHTML = 'INPUT:';

                div_inp_zag_11_1.appendChild(span_zag_11);

            div_inp_zag_1_1.appendChild(div_inp_zag_11_1);

            //Text "Name"
            var div_inp_zag_2 = document.createElement('div');
                div_inp_zag_2.id = "dh4_zag_input_14" + ind_input_tec;
                div_inp_zag_2.className = "cdh4_zag_input_1ob_text";

                var div_inp_zag_21 = document.createElement('div');
                    div_inp_zag_21.className = "inp_zag";

                    var span_zag_2 = document.createElement('span');
                        span_zag_2.innerHTML = 'Name:';

                div_inp_zag_21.appendChild(span_zag_2);

            div_inp_zag_2.appendChild(div_inp_zag_21);

            //Input "Name"
            var div_inp_zag_3 = document.createElement('div');
                div_inp_zag_3.id = "dh4_zag_input_15" + ind_input_tec;
                div_inp_zag_3.className = "cdh4_zag_input_1ob_inp";

                var inp_zag_31 = document.createElement('input');
                    inp_zag_31.id = "ih4_zag_input_15" + ind_input_tec;
                    inp_zag_31.className = "cdh4_zag_input_1ob_si";

            div_inp_zag_3.appendChild(inp_zag_31);

            //Text "Value"
            var div_inp_zag_4 = document.createElement('div');
                div_inp_zag_4.id = "dh4_zag_input_16" + ind_input_tec;
                div_inp_zag_4.className = "cdh4_zag_input_1ob_text";

                var div_inp_zag_41 = document.createElement('div');
                    div_inp_zag_41.className = "inp_zag";

                    var span_zag_4 = document.createElement('span');
                        span_zag_4.innerHTML = 'Value:';

                div_inp_zag_41.appendChild(span_zag_4);

            div_inp_zag_4.appendChild(div_inp_zag_41);

            //Input "Value"
            var div_inp_zag_5 = document.createElement('div');
                div_inp_zag_5.id = "dh4_zag_input_17" + ind_input_tec;
                div_inp_zag_5.className = "cdh4_zag_input_1ob_inp";

                var inp_zag_51 = document.createElement('input');
                    inp_zag_51.id = "ih4_zag_input_17" + ind_input_tec;
                    inp_zag_51.className = "cdh4_zag_input_1ob_si";

            div_inp_zag_5.appendChild(inp_zag_51);

            //Text "Type"
            var div_inp_zag_6 = document.createElement('div');
                div_inp_zag_6.id = "dh4_zag_input_17" + ind_input_tec;
                div_inp_zag_6.className = "cdh4_zag_input_1ob_text";

                var div_inp_zag_61 = document.createElement('div');
                    div_inp_zag_61.className = "inp_zag";

                    var span_zag_6 = document.createElement('span');
                        span_zag_6.innerHTML = 'Type:';

                div_inp_zag_61.appendChild(span_zag_6);

            div_inp_zag_6.appendChild(div_inp_zag_61);

            //Input "Type"
            var div_inp_zag_7 = document.createElement('div');
                div_inp_zag_7.id = "dh4_zag_input_18" + ind_input_tec;
                div_inp_zag_7.className = "cdh4_zag_input_1ob_inp";

                var inp_zag_71 = document.createElement('input');
                    inp_zag_71.id = "ih4_zag_input_18" + ind_input_tec;
                    inp_zag_71.className = "cdh4_zag_input_1ob_si";
                    var sel_opt = document.getElementById("sdh4_zag_input_13").value;
                    if(sel_opt == "file"){
                        inp_zag_51.setAttribute('type',"file");
                        inp_zag_51.style.width = '160px';
                        }
                    inp_zag_71.value = sel_opt;
                    inp_zag_71.setAttribute('disabled',"disabled");

            div_inp_zag_7.appendChild(inp_zag_71);

        div_input.appendChild(div_inp_zag_1);
        div_input.appendChild(div_inp_zag_1_1);
        div_input.appendChild(div_inp_zag_2);
        div_input.appendChild(div_inp_zag_3);
        div_input.appendChild(div_inp_zag_4);
        div_input.appendChild(div_inp_zag_5);
        div_input.appendChild(div_inp_zag_6);
        div_input.appendChild(div_inp_zag_7);

        vstavka_div_inp.appendChild(div_input);
    ind_input++;
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Function delete new input in to blok "Input"
    function DeleteInput(id_el) {
        var id_del_el = document.getElementById("dh4_zag_input_2" + id_el);

            id_del_el.parentNode.removeChild(id_del_el);

        mas_input[mas_input.indexOf(id_el)] = -1;
        //ind_input--;
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Function add headers
    function AddHeaders() {
        var ind_headers_tec = ind_headers;
        var vstavka_div_param = document.getElementById("dh4_zag_headers_2");

        ////////////////////////////////////////////////////////
        //Create div - class = ch2_param_path_1
        var div_param_path = document.createElement('div');
                div_param_path.className = "ch2_param_path_1";
                div_param_path.id = "h2_param_header_" + ind_headers_tec;

        ////////////////////////////////////////////////////////
        //Create div - class = cdpath_param_key
        var div_param_path_1 = document.createElement('div');
                div_param_path_1.className = "cdpath_param_key";
                div_param_path_1.id = "cdpk_header_" + ind_headers_tec;

        //Create div - class = cdpath_param_value
        var div_param_path_2 = document.createElement('div');
                div_param_path_2.className = "cdpath_param_value";
                div_param_path_2.id = "cdpv_header_" + ind_headers_tec;

        //Create div - class = cdpath_param_del
        var div_param_path_3 = document.createElement('div');
                div_param_path_3.className = "cdpath_header_del";
                div_param_path_3.id = "cdpd_header_" + ind_headers_tec;

        ////////////////////////////////////////////////////////
        //Create input - class = cipath_param_key
        var input_param_path_1 = document.createElement('input');
                input_param_path_1.className = "cipath_param_key";
                input_param_path_1.id = "ipath_header_key_" + ind_headers_tec;
                input_param_path_1.setAttribute('type',"text");
                input_param_path_1.setAttribute('placeholder',"key");
                div_param_path_1.appendChild(input_param_path_1);

        //Create input - class = cipath_param_value
        var input_param_path_2 = document.createElement('input');
                input_param_path_2.className = "cipath_param_value";
                input_param_path_2.id = "ipath_header_value_" + ind_headers_tec;
                input_param_path_2.setAttribute('type',"text");
                input_param_path_2.setAttribute('placeholder',"value");
                div_param_path_2.appendChild(input_param_path_2);

        //Create input - class = cipath_param_del
        var input_param_path_3 = document.createElement('input');
                input_param_path_3.className = "cipath_param_del";
                input_param_path_3.id = "ipath_header_del_" + ind_headers_tec;
                input_param_path_3.setAttribute('type',"button");
                input_param_path_3.setAttribute('vd',ind_headers_tec);
                input_param_path_3.setAttribute('onclick',"DeleteHeader(" + ind_headers_tec + ")");
                input_param_path_3.value = "x";
                div_param_path_3.appendChild(input_param_path_3);

        div_param_path.appendChild(div_param_path_1);
        div_param_path.appendChild(div_param_path_2);
        div_param_path.appendChild(div_param_path_3);

        vstavka_div_param.style.height = (50 + ind_headers_tec * 50) + 'px';
        vstavka_div_param.appendChild(div_param_path);

        ind_headers++;
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Function delete params in to path
        function DeleteHeader(id_el) {

            var id_del_el = document.getElementById("h2_param_header_" + id_el);

            id_del_el.parentNode.removeChild(id_del_el);

            //Reduce height div
            var vstavka_div_param = document.getElementById("dh4_zag_headers_2");
            var t = vstavka_div_param.style.height;
            t = t.substr(0,t.length -2);
            vstavka_div_param.style.height =  (t - 50) + 'px';
        //ind_headers--;
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Function send request to server
    function SendRequest() {
        var flag_er = false;
        var ind_create_input = 0;
        var str = document.getElementById("iurls").value;

        if(flag_zagolovka == 1) {
        //Send INPUT

        //Create input and set attributes(name, value, type, form) - massiv inputov (mas_input)

            if(mas_input.length != 0) {
                //if set "form" and "action"
                if((document.getElementById("ih4_zag_input_15").value != "") && (document.getElementById("ih4_zag_input_17").value != "")){
                    //If form: name, action not null

                    var vstavka_inputov = document.getElementById("inviz_block1");
                    var form_name = document.getElementById("ih4_zag_input_15").value;
                    var form_action = document.getElementById("ih4_zag_input_17").value;
                    //Form send to url "action"
                    document.getElementById("iurld").value = form_action;
                    var form_method = document.getElementById("isel_method").value;
                    var form_id = "myForm";

                    var new_form;
                    //Create form
                    if(document.getElementById("myForm") == null) {

                        //Create new
                        new_form = document.createElement('form');
                        new_form.id = form_id;
                        new_form.name = form_name;
                        new_form.setAttribute('action', form_action);
                        new_form.setAttribute('method', form_method);
                        vstavka_inputov.appendChild(new_form);

                    } else {

                        //Update form
                        new_form = document.getElementById("myForm");
                        new_form.name = form_name;
                        new_form.setAttribute('action', form_action);
                        new_form.setAttribute('method', form_method);

                    }

                    for(var i = 0; i < mas_input.length; i++) {
                        //If input name not null
                        if((mas_input[i] != -1) && (document.getElementById("ih4_zag_input_15" + mas_input[i]).value != "")) {

                            var new_input_v;
                            //Create input
                            if(document.getElementById("new_in_" + ind_create_input) == null) {
                                new_input_v = document.createElement('input');
                                new_input_v.id = "new_in_" + ind_create_input;
                                new_input_v.className = "cinviz";
                                new_input_v.name = document.getElementById("ih4_zag_input_15" + mas_input[i]).value;
                                new_input_v.value = document.getElementById("ih4_zag_input_17" + mas_input[i]).value;

                                new_input_v.setAttribute('type', document.getElementById("ih4_zag_input_18" + mas_input[i]).value);
                                new_input_v.setAttribute('form', form_id);
                                vstavka_inputov.appendChild(new_input_v);
                            } else {
                                new_input_v = document.getElementById("new_in_" + ind_create_input);
                                new_input_v.name = document.getElementById("ih4_zag_input_15" + mas_input[i]).value;
                                new_input_v.value = document.getElementById("ih4_zag_input_17" + mas_input[i]).value;
                                new_input_v.setAttribute('form', form_id);
                            }
                            ind_create_input++;

                        } else {
                            if(mas_input[i] != -1){
                                alert('Заполните поле "name" у Input!');
                                flag_er = true;
                                }
                        }
                    }


                } else {
                    alert('Заполните поля "name" и "action" у Form!');
                    flag_er = true;
                }
            }
        }

        if(flag_zagolovka == 2) {
        //Send Headers

        }

        if(flag_zagolovka == 3) {
        //Send Body

        }

        str = str + document.getElementById("iurld").value;
        if(mas_params.length != 0) {
                //We have params_path
                    for(var i = 0; i < mas_params.length; i++) {
                        if((mas_params[i] != -1) && (document.getElementById("ipath_param_key_" + mas_params[i]).value != "")) {
                            str = str + '?' + document.getElementById("ipath_param_key_" + mas_params[i]).value + '=' + document.getElementById("ipath_param_value_" + mas_params[i]).value + '&';
                        }
                    }
                }

        if(flag_er == false) {
            document.getElementById("myForm").submit();
            alert('Запрос отправлен!\n' + str);
        } else {
            alert('Ошибка, запрос не отправлен!\n' + str);
        }
    return false;
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*Old version*/
    function AddInput(){
        var ind_tec = ind;
        //Create <div>
        var inp_div = document.createElement('div');
        inp_div.className = "new_div";
        inp_div.id = "ndiv" + ind_tec;

        //Create two <input>
        var input = document.createElement('input');
        var input2 = document.createElement('input');
        input.className = "new_input_kl";
        input2.className = "new_input_vl";
        input.id = "inpkey" + ind_tec;
        input2.id = "inpval" + ind_tec;
        //input.setAttribute('form','myform');
        //input2.setAttribute('form','myform');
        input.setAttribute('name',"inpkey" + ind_tec);
        input2.setAttribute('name',"inpval" + ind_tec);
        in_name[ind_tec] = "inpkey" + ind_tec;
        in_value[ind_tec] = "inpval" + ind_tec;

        //Create <div> - text(INPUT)
        var div_t_i = document.createElement('div');
        div_t_i.className = "new_div_text_in";
        div_t_i.innerHTML = "INPUT " + ind_tec;

        //Create <div> - content <div>+<input>
        var div_kl = document.createElement('div');
        var div_vl = document.createElement('div');
        div_kl.className = "new_div_obsh_kl";
        div_vl.className = "new_div_obsh_vl";

        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        div1.className = "new_div_text_kl";
        div2.className = "new_div_text_vl";
        div1.innerHTML = "name";
        div2.innerHTML = "value";

        //Append element on <div> with key(TEXT + <INPUT>)
        div_kl.appendChild(div1);
        div_kl.appendChild(input);
        //Append element on <div> with value(TEXT + <INPUT>)
        div_vl.appendChild(div2);
        div_vl.appendChild(input2);

        //Append element on <div>
        inp_div.appendChild(div_t_i);
        inp_div.appendChild(div_kl);
        inp_div.appendChild(div_vl);

        vstavka.appendChild(inp_div);
        ind++;
    }

    document.getElementById("but_submit").onclick = function(){
        ////////////////////////////////////////////////////////
        //С учетом отсутствия перезагрузки страницы после
        //отправки запроса, необходимо удалить созданные ранее INPUTы

        for(var j = 0; j < in_name.length; j++) {

            var new_el_value = document.getElementById(in_name[j]).value;
            var new_el = document.getElementById("new_" + new_el_value);
            if(new_el != null) {
                new_el.setAttribute('form', ''); //подстраховка
                new_el.parentNode.removeChild(new_el);
                }
            }

        ////////////////////////////////////////////////////////

        var inradio = document.getElementsByName('type_zapros');
        var flagcheck=false;
        var method = "";

        //Проверка седержания конструкторов INPUT'ов и создание INPUT'ов для отправки в form
        var flag_er = false;
        //Если INPUTы есть генерируем их, если нет отправляем без них
        if(in_name.length != 0) {
         for(var i = 0; i < in_name.length; i++) {
            if(document.getElementById(in_name[i]).value != "") {
                //Проверяем на совпадение имен
                if(i != 0) {
                    for(var j = 0; j < in_name.length; j++) {
                        if((document.getElementById(in_name[i]).value == document.getElementById(in_name[j]).value) && (i != j)) {
                            flag_er = true;
                            break;
                            }
                        }
                    }
                if(flag_er == true) {break;}
                //Значения name и value в конструкторе не пустые создаем INPUT
                var new_input = document.createElement('input');
                new_input.className = "input_invis";
                new_input.id = "new_" + document.getElementById(in_name[i]).value;
                new_in_id[i] = new_input.id;
                new_input.setAttribute('form', 'myform');
                new_input.setAttribute('type', 'text');
                new_input.setAttribute('name', document.getElementById(in_name[i]).value);
                new_input.setAttribute('value', document.getElementById(in_value[i]).value);
                document.getElementById("div_foot").appendChild(new_input);
                } else {
                    alert('Не задано имя INPUTа. Для отправки запроса необходимо исправить ошибку.');
                    break;
                }
         }
        }

         if(flag_er == true) {
         alert('Одинаковые имена INPUTов. Для отправки запроса необходимо исправить ошибку.');
         } else {

            //Проверка на выбор метода отправки
            for(var i = 0; i < inradio.length; i++) {
                if(inradio[i].checked){
                    flagcheck = true;
                    method = inradio[i].getAttribute('value');
                    break;
                }
            }
            if(flagcheck){
                var uri_path_val = document.getElementById("uri_path").getAttribute('value');
                var url_host_val = document.getElementById("url_host").getAttribute('value');
                var url_port_val = document.getElementById("url_port").getAttribute('value');
                var url_project_val = document.getElementById("url_project").getAttribute('value');
                var url = url_host_val + url_port_val + url_project_val + uri_path_val;
                var zapros = new XMLHttpRequest();
                var form_id = document.getElementById("myform");
                var formData1 = new FormData(form_id);
                //Заполняем форму данными из созданных INPUT
                //var mas = {};
                //var str = '';
                //str = str + "{";
                var str = "{";
                var strGET = "?"
                for(var i = 0; i < new_in_id.length; i++) {
                    //    mas[document.getElementById(new_in_id[i]).name] = document.getElementById(new_in_id[i]).value; // массив для передачи тоже готов, как альтернатива
                    if(i != 0){
                        str = str + ",";
                        strGET = strGET +"&";
                        }
                    str = str + "\"" + document.getElementById(new_in_id[i]).name + "\":\"" + document.getElementById(new_in_id[i]).value + "\"";
                    strGET = strGET + document.getElementById(new_in_id[i]).name + "=" + document.getElementById(new_in_id[i]).value;
                }
                str = str + "}";
                var formData = str;
                //formData = mas;

                if(method == "OPTIONS"){
                            zapros.open(method, url, true);
                            zapros.send(formData);
                            }

                if(method == "GET"){
                            zapros.open(method, url + strGET, true); //false - синхронное соединение/true - задается асинхронное соединение с адресом u_path_val(браузер не ждет ответ сервера)
                                                      //для обработки ответа функцию необходимо вежать на свойство onreadystatechange
                            zapros.send(null); //null - тело запроса отсутствует
                            }

                if(method == "HEAD"){
                            $$a({
                                type:'head',
                                url: url,
                                data: formData,//параметры запроса
                                response:'text'
                                });
                            }

                if(method == "POST"){
                            zapros.open(method, url, true);
                            zapros.send(formData);
                            }

                if(method == "PUT"){
                            zapros.open(method, url, true);
                            zapros.send(formData);
                            }

                if(method == "PATCH"){
                            zapros.open(method, url, true);
                            zapros.send(formData);
                            }

                if(method == "DELETE"){
                            zapros.open(method, url, true);
                            zapros.send(formData);
                            }

                if(method == "TRACE"){
                            $$a({
                                type:'trace',
                                url: url,
                                data: formData,//параметры запроса
                                response:'text'
                                });
                            }

                if(method == "CONNECT"){
                            $$a({
                                type: method,
                                url: url,
                                data: formData,//параметры запроса
                                response:'text'
                                });
                            }

            } else {
                alert('Не выбран метод отправки');
            }
         }
         return false;
    }
