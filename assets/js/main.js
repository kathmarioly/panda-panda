
function la_img()
        {
            var nuevoLi=document.getElementById("ima_gen").value;
            if(nuevoLi.length>0)
            {
                if(find_li(nuevoLi))
                {
                    var li=document.createElement('li');
                    li.id=nuevoLi;
                    li.innerHTML="<span onclick='eliminar(this)'>X</span>"+nuevoLi;
                    document.getElementById("listaDesordenada").appendChild(li);
                }
            }
            return false;
        }
 
        /**
         * Funcion que busca si existe ya el <li> dentrol del <ul>
         * Devuelve true si no existe.
         */
        function find_li(contenido)
        {
            var el = document.getElementById("listaDesordenada").getElementsByTagName("li");
            for (var i=0; i<el.length; i++)
            {
                if(el[i].innerHTML==contenido)
                    return false;
            }
            return true;
        }
 
        /**
         * Funcion para eliminar los elementos
         * Tiene que recibir el elemento pulsado
         */
        function eliminar(elemento)
        {
            var id=elemento.parentNode.getAttribute("id");
            node=document.getElementById(id);
            node.parentNode.removeChild(node);
        }