module.exports = (result1, result2) => {
    const today = new Date();
return `
<p style="text-align: left;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Utalca.svg/300px-Utalca.svg.png" width="70" height="70" /><strong><br /></strong><strong>FACULTAD DE INGENIERÍA<br /></strong><strong>UNIVERSIDAD DE TALCA<br /></strong>DEPARTAMENTO DE CIENCIAS DE LA COMPUTACIÓN (DCC)&nbsp;&nbsp;</p>
<div style="text-align: center;">&nbsp;</div>
<div style="text-align: center;">&nbsp;</div>
<div style="text-align: left;">
<h1>&nbsp;</h1>
<h1>&nbsp;</h1>
<h1>&nbsp;</h1>
<h1 style="text-align: center;"><strong>Documento de Diseño</strong></h1>
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
<p style="text-align: right;"><strong>Versión:</strong></p>
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
<h1 style="text-align: center;">Índice</h1>
<p>&nbsp;</p>
<p style="text-align: center;"><strong>1&nbsp;&nbsp;&nbsp; Introducción................................................................................................................................. 1</strong></p>
<p style="text-align: center;">1.1&nbsp;&nbsp;&nbsp; Propósito del Sistema................................................................................................................ 1</p>
<p style="text-align: center;">1.2&nbsp;&nbsp;&nbsp; Alcance del Proyecto................................................................................................................ 1</p>
<p style="text-align: center;">1.3&nbsp;&nbsp;&nbsp; Contexto.................................................................................................................................. 1</p>
<p style="text-align: center;">1.4&nbsp;&nbsp;&nbsp; Referencias............................................................................................................................... 1</p>
<p style="text-align: center;"><strong>2&nbsp;&nbsp;&nbsp; Descripción General...................................................................................................................... 2</strong></p>
<p style="text-align: center;">2.1&nbsp;&nbsp;&nbsp; Suposiciones y Dependencias......................................................................................................... 2</p>
<p style="text-align: center;">2.2&nbsp;&nbsp;&nbsp; Restricciones Generales.................................................................................................................. 2</p>
<p style="text-align: center;"><strong>3&nbsp;&nbsp;&nbsp; Diseño Arquitectónico................................................................................................................... 3</strong></p>
<p style="text-align: center;">3.1&nbsp;&nbsp;&nbsp; Arquitectura Física......................................................................................................................... 3</p>
<p style="text-align: center;">3.2&nbsp;&nbsp;&nbsp; Arquitectura Lógica......................................................................................................................... 3</p>
<p style="text-align: center;">&nbsp;&nbsp;&nbsp; Módulo A.................................................................................................................................... 3</p>
<p style="text-align: center;">&nbsp;&nbsp;&nbsp; Módulo B.................................................................................................................................... 3</p>
<p style="text-align: center;">&nbsp;&nbsp;&nbsp; Módulo C.................................................................................................................................... 3</p>
<p style="text-align: center;">3.3&nbsp;&nbsp;&nbsp; Modelo de Datos........................................................................................................................ 3</p>
<p style="text-align: center;"><strong>4&nbsp;&nbsp;&nbsp; Diseño Detallado........................................................................................................................... 4</strong></p>
<p style="text-align: center;">4.1&nbsp;&nbsp;&nbsp; Diseño de Diagrama de Clases......................................................................................................... 4</p>
<p style="text-align: center;">4.2&nbsp;&nbsp;&nbsp; Diseño de Interfaz de Usuario......................................................................................................... 4</p>
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
<div style="page-break-after: always;">&nbsp;</div>
<p>&nbsp;</p>
<h1><a name="_Toc353436287"></a>&nbsp; 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Diseño Arquitectónico</h1>
<h2><a name="_Toc353436288"></a>&nbsp; 3.1&nbsp;&nbsp;&nbsp; Arquitectura Física</h2>
<p>&nbsp; &nbsp;test</p>
<p>&nbsp;</p>
<h2><a name="_Toc353436288"></a>&nbsp; 3.2&nbsp;&nbsp;&nbsp; Arquitectura Lógica</h2>
<p>&nbsp; &nbsp;test</p>
<p>&nbsp;</p>
<h2><a name="_Toc353436288"></a>&nbsp; Módulo A</h2>
<p>&nbsp; &nbsp;test</p>
<p>&nbsp;</p>
<h2><a name="_Toc353436288"></a>&nbsp; Módulo B</h2>
<p>&nbsp; &nbsp;test</p>
<p>&nbsp;</p>
<h2><a name="_Toc353436288"></a>&nbsp; Módulo C</h2>
<p>&nbsp; &nbsp;test</p>
<p>&nbsp;</p>
<h2><a name="_Toc353436288"></a>&nbsp; 3.3&nbsp;&nbsp;&nbsp; Modelo de Datos</h2>
<p>&nbsp; &nbsp;test</p>
<p>&nbsp;</p>
<div style="page-break-after: always;">&nbsp;</div>
<p>&nbsp;</p>
<h1><a name="_Toc353436287"></a>&nbsp; 4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Diseño Detallado</h1>
<h2><a name="_Toc353436288"></a>&nbsp; 4.1&nbsp;&nbsp;&nbsp; Diseño de Diagrama de Clases</h2>
<p>&nbsp; &nbsp;test</p>
<p>&nbsp;</p>
<h2><a name="_Toc353436288"></a>&nbsp; 4.1&nbsp;&nbsp;&nbsp; Diseño de Interfaz de Usuario</h2>
<p>&nbsp; &nbsp;test</p>
<p>&nbsp;</p>
`;
};