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
        var str_url_stat = document.getElementById("iurls").value;
        var str_quest_param = "";

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
                        new_form.setAttribute('enctype', "multipart/form-data");
                        //new_form.setAttribute('onSubmit', "return false");
                        //document.getElementById("iheader").appendChild(new_form);
                        document.body.insertBefore(new_form,inviz_block1); //
                        //inviz_block1.insertBefore(new_form,inviz_block1.firstChild);

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
                                vstavka_inputov = document.getElementById("myForm");//заменяем vstavka_inputov для тестов
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
                    //document.getElementById("ibsend").setAttribute('form', form_id);

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

        //str = str + document.getElementById("iurld").value;
        if(mas_params.length != 0) {
                //We have params_path

                    for(var i = 0; i < mas_params.length; i++) {
                        if((mas_params[i] != -1) && (document.getElementById("ipath_param_key_" + mas_params[i]).value != "")) {
                            str_quest_param = str_quest_param + document.getElementById("ipath_param_key_" + mas_params[i]).value + '=' + document.getElementById("ipath_param_value_" + mas_params[i]).value + '&';
                        }
                    }
                    str_quest_param = str_quest_param.substr(0,str_quest_param.length -1);

                }

        if(flag_er == false) {
            //document.getElementById("myForm").submit(); //- в любом случае перегружает страницу
            /*document.forms["имя формы"].submit() или
            document.forms.имя формы.submit()*/
            //********var f_id = document.getElementById("myForm");
            //********f_id.submit();
            //document.forms.myForm.submit();
            //alert('Запрос отправлен!\n' + str);
            SendToServer(str_url_stat, str_quest_param);
        } else {
            alert('Ошибка, запрос не отправлен!\n' + str);
        }
    return false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Function read method otpravki http zaprosa (JS, AJAX, submit)
function RequestMethod() {
    var id_method = document.getElementById("isel_method");
    //OPTIONS
    if((id_method.value == "OPTIONS") || (id_method.value == "PUT") || (id_method.value == "PATCH") || (id_method.value == "DELETE")){
        var sel_id = document.getElementById("issend_method");
        sel_id.options[0].removeAttribute('disabled');
        sel_id.options[1].setAttribute('disabled', "disabled");
        if(sel_id.options[sel_id.selectedIndex].hasAttribute('disabled') == true){
            sel_id.selectedIndex = 0;
            }
    }
    //GET or POST
    if((id_method.value == "GET") || (id_method.value == "POST")){
        var sel_id = document.getElementById("issend_method");
        sel_id.options[0].removeAttribute('disabled');
        sel_id.options[1].removeAttribute('disabled');
    }
    //HEAD
    if(id_method.value == "HEAD"){
        var sel_id = document.getElementById("issend_method");
        sel_id.options[0].removeAttribute('disabled');
        sel_id.options[1].setAttribute('disabled', "disabled");
        if(sel_id.options[sel_id.selectedIndex].hasAttribute('disabled') == true){
            sel_id.selectedIndex = 0;
            }
    }
}

function SendToServer(s_url_stat, s_quest_param) {
    //If create with form
    var s_form_action = "";
    var s_url_input = "";

    var id_sposob = document.getElementById("issend_method");
    var name_sposob = id_sposob.options[id_sposob.selectedIndex].text;

    var id_method = document.getElementById("isel_method");
    var name_method = id_method.options[id_method.selectedIndex].text;

    //Отправляемые данные
    var formData = "";
    var url ="";

    var flag_file = 0;
        for (var i = 0; i < document.forms.myForm.elements.length; i++) {
            if (document.forms.myForm.elements[i].type == "file") {
                flag_file++;
            }
        }

    if(name_sposob == "AJAX") {

        if(flag_file == 0) {
            var zapros = new XMLHttpRequest();



            //Если выделен раздел INPUT
            if (flag_zagolovka == 1) {
                //собрать пары key-value у input'ов
                //определиться с форматом отправляемым в body (JSON или какой еще)
                //s_form_action   - action
                //s_url_input  - пары key-value
                //s_url_input;
                //s_form_action;
                s_form_action = document.getElementById("ih4_zag_input_17").value;
                }

            if (s_form_action == "") { s_form_action = document.getElementById("iurld").value; } // Если у формы нет эктион и отсутствуют параметры запроса, в эктион лижим заданный самостоятельно урл

            if((name_method == "GET") || (name_method == "HEAD")){
                url = s_url_stat;
                if(s_form_action != ""){url = url + s_form_action;}
                if (mas_input.length != 0) { s_url_input = GetInputStr("=");}
                if(s_url_input != ""){url = url + "?" + s_url_input;}
                if(s_quest_param != ""){
                    if(s_url_input != "") {
                        url = url + "&" + s_quest_param;
                        } else {
                            url = url + "?" + s_quest_param;
                        }
                    }
                formData = null;

            } else {
                url = s_url_stat;
                if(s_form_action != ""){url = url + s_form_action;}
                if(s_quest_param != ""){url = url + "?" + s_quest_param;}
                if (mas_input.length != 0) { s_url_input = GetInputStr(":"); }
                formData = s_url_input;
                }

                zapros.open(name_method, url, true);
                zapros.send(formData);
                //false - синхронное соединение/true - задается асинхронное соединение с адресом u_path_val(браузер не ждет ответ сервера)
                //для обработки ответа функцию необходимо вежать на свойство onreadystatechange
                //null - тело запроса отсутствует

                document.getElementById("iurld").value = url.substr(s_url_stat.length, url.length);
        } else {
            alert('Запрос не отправлен!\nНа форме присутствует файл\nВыберете способ отправки запроса Sгbmit и метод отправки запроса POST.');
        }
    }

    if(name_sposob == "Submit") {

        if(flag_file == 0) {
            document.forms.myForm.submit();
            } else {
                if(name_method == "POST") {
                    document.forms.myForm.submit();
                    } else {
                        alert('Запрос не отправлен!\nНа форме присутствует файл выберете метод отправки запроса POST.');
                    }
            }

        }

return false; //идет перезагрузка??? и вместо парраметра отправляется трока с ? на конце
}

function GetInputStr(razdelitel) {
    var rab_str = "";
    for (var i=0; i < mas_input.length; i++) {
        if(mas_input[i] != -1) {
            //type - не учитывается type
            rab_str =  rab_str + document.getElementById("ih4_zag_input_15" + mas_input[i]).value + razdelitel + document.getElementById("ih4_zag_input_17" + mas_input[i]).value;//"\"" +
            if(razdelitel == ":"){ rab_str = rab_str + ";"; }
                else { rab_str = rab_str + "&"; }
            }
        }
        rab_str = rab_str.substr(0,rab_str.length - 1);// delete ";" or "&"
    if(razdelitel == ":") {
        rab_str = "{" + rab_str + "}";
        }
    return rab_str;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
