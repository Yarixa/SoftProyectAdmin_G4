module.exports = (result1, result2) => {

    var lista_requisitos=""
    result1.forEach(generarTablasRU); 
    function generarTablasRU(value, index, array) { //Funcion que genera el codigo html con las tablas de requisitos
        lista_requisitos = lista_requisitos + 
        '<table style="margin-left: auto; margin-right: auto; border: 1px solid black; border-collapse: collapse; height: 206px;" width="529">'+"\n"+
        '<tbody>'+"\n"+
        '<tr>'+"\n"+
        '<td style="width: 525px; text-align: left;">&nbsp;<strong style="text-align: left;">'+value.idRU+'</strong><strong style="text-align: left;"> - '+value.nombre+'</strong>'+"\n"+
        '<p style="text-align: left;"><strong>Descripci&oacute;n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </strong>'+value.descripcion+'</p>'+"\n"+
        '<p style="text-align: left;"><strong>Fuente&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </strong>'+value.fuente+'</p>'+"\n"+
        '<p style="text-align: left;"><strong>Estabilidad&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </strong>'+value.estabilidad+'</p>'+"\n"+
        '<p style="text-align: left;"><strong>Tipo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </strong>'+value.tiporeq+'</p>'+"\n"+
        '</td>'+"\n"+
        '</tr>'+"\n"+
        '</tbody>'+"\n"+
        '</table>'+"\n"+
        '<p>&nbsp;</p>'+"\n"
    }
    const today = new Date();
return `
<p style="text-align: left;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Utalca.svg/300px-Utalca.svg.png" width="70" height="70" /><strong><br /></strong><strong>FACULTAD DE INGENIER&Iacute;A<br /></strong><strong>UNIVERSIDAD DE TALCA<br /></strong>DEPARTAMENTO DE CIENCIAS DE LA COMPUTACION (DCC)&nbsp;&nbsp;</p>
<div style="text-align: center;">&nbsp;</div>
<div style="text-align: center;">&nbsp;</div>
<div style="text-align: left;">
<h1>&nbsp;</h1>
<h1>&nbsp;</h1>
<h1>&nbsp;</h1>
<h1 style="text-align: center;"><strong>Documento de Especificaci&oacute;n de Requisitos de Usuario/Software</strong></h1>
<h1 style="text-align: center;"><strong>Nombre de Proyecto</strong></h1>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p style="text-align: right;"><strong>Fecha: ${`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`}</strong></p>
<p style="text-align: right;"><strong>Versi&oacute;n:</strong></p>
<br />
<div style="page-break-after: always;">&nbsp;</div>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;"><strong>&nbsp; &nbsp; Equipo de Desarrollo:</strong></p>
<table style="height: 37px; width: 605px; border: 1px solid black; border-collapse: collapse; margin-left: auto; margin-right: auto;">
<tbody>
<tr>
<td style="width: 214px; border: 1px solid black; border-collapse: collapse;"><strong>Nombre</strong></td>
<td style="width: 140px; border: 1px solid black; border-collapse: collapse;"><strong>Rol</strong></td>
<td style="width: 229px; border: 1px solid black; border-collapse: collapse;"><strong>Contacto</strong></td>
</tr>
<tr>
<td style="width: 214px; border: 1px solid black; border-collapse: collapse;">test</td>
<td style="width: 140px; border: 1px solid black; border-collapse: collapse;">test</td>
<td style="width: 229px; border: 1px solid black; border-collapse: collapse;">test</td>
</tr>
</tbody>
</table>
<br />&nbsp; &nbsp;&nbsp;<strong>Contraparte:</strong></div>
<div style="text-align: left;"><strong>&nbsp;&nbsp;</strong></div>
<table style="height: 37px; width: 605px; border: 1px solid black; border-collapse: collapse; margin-left: auto; margin-right: auto;">
<tbody>
<tr>
<td style="width: 214px; border: 1px solid black; border-collapse: collapse;"><strong>Nombre</strong></td>
<td style="width: 140px; border: 1px solid black; border-collapse: collapse;"><strong>Rol</strong></td>
<td style="width: 229px; border: 1px solid black; border-collapse: collapse;"><strong>Contacto</strong></td>
</tr>
<tr>
<td style="width: 214px; border: 1px solid black; border-collapse: collapse;">test</td>
<td style="width: 140px; border: 1px solid black; border-collapse: collapse;">test</td>
<td style="width: 229px; border: 1px solid black; border-collapse: collapse;">test</td>
</tr>
</tbody>
</table>
<div style="page-break-after: always;">&nbsp;</div>
<h1 style="text-align: center;">&nbsp;</h1>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h1 style="text-align: center;">&Iacute;ndice</h1>
<p>&nbsp;</p>
<p style="text-align: center;"><strong>1&nbsp;&nbsp;&nbsp; Introducci&oacute;n................................................................................................................................. 1</strong></p>
<p style="text-align: center;">1.1&nbsp;&nbsp;&nbsp; Prop&oacute;sito del Sistema................................................................................................................ 1</p>
<p style="text-align: center;">1.2&nbsp;&nbsp;&nbsp; Alcance del Proyecto................................................................................................................ 1</p>
<p style="text-align: center;">1.3&nbsp;&nbsp;&nbsp; Contexto.................................................................................................................................. 1</p>
<p style="text-align: center;">1.4&nbsp;&nbsp;&nbsp; Referencias............................................................................................................................... 1</p>
<p style="text-align: center;"><strong>2&nbsp;&nbsp;&nbsp; Descripci&oacute;n General...................................................................................................................... 2</strong></p>
<p style="text-align: center;">2.1&nbsp;&nbsp;&nbsp; Suposiciones y Dependencias......................................................................................................... 2</p>
<p style="text-align: center;">2.2&nbsp;&nbsp;&nbsp; Restricciones Generales.................................................................................................................. 2</p>
<p style="text-align: center;">2.3&nbsp;&nbsp;&nbsp; Usuarios........................................................................................................................................ 2</p>
<p style="text-align: center;"><strong>3&nbsp;&nbsp;&nbsp; Requisitos del Usuario................................................................................................................... 3</strong></p>
<div style="page-break-after: always;">&nbsp;</div>
<p>&nbsp;</p>
<h1><a name="_Toc353436287"></a>&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Introducci&oacute;n</h1>
<h2><a name="_Toc353436288"></a>&nbsp; 1.1&nbsp;&nbsp;&nbsp; Prop&oacute;sito del Sistema</h2>
<p>&nbsp; &nbsp;${result2[0].proposito}</p>
<p>&nbsp;</p>
<h2><a name="_Toc353436288"></a>&nbsp; 1.2&nbsp;&nbsp;&nbsp; Alcance del Proyecto</h2>
<p>&nbsp; &nbsp;${result2[0].alcance}</p>
<p>&nbsp;</p>
<h2><a name="_Toc353436288"></a>&nbsp; 1.3&nbsp;&nbsp;&nbsp; Contexto</h2>
<p>&nbsp; &nbsp;${result2[0].contexto}</p>
<p>&nbsp;</p>
<h2><a name="_Toc353436288"></a>&nbsp; 1.4&nbsp;&nbsp;&nbsp; Referencias</h2>
<p>&nbsp; &nbsp;${result2[0].referencias}</p>
<div style="page-break-after: always;">&nbsp;</div>
<p>&nbsp;</p>
<h1><a name="_Toc353436287"></a>&nbsp; 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Descripci&oacute;n general</h1>
<h2><a name="_Toc353436288"></a>&nbsp; 2.1&nbsp;&nbsp;&nbsp; Suposiciones y Dependencias</h2>
<p>&nbsp; &nbsp;${result2[0].suposiciones}</p>
<p>&nbsp;</p>
<h2><a name="_Toc353436288"></a>&nbsp; 2.2&nbsp;&nbsp;&nbsp; Restricciones Generales</h2>
<p>&nbsp; &nbsp;${result2[0].restricciones}</p>
<p>&nbsp;</p>
<h2><a name="_Toc353436288"></a>&nbsp; 2.3&nbsp;&nbsp;&nbsp; Usuarios</h2>
<p>&nbsp; &nbsp;${result2[0].usuarios}</p>
<div style="page-break-after: always;">&nbsp;</div>
<p>&nbsp;</p>
<h1><a name="_Toc353436287"></a>&nbsp; 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Requisitos de Usuario</h1>
<p>&nbsp;</p>
${lista_requisitos}
`;
};