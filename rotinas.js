function ConvertDateBrasil(campo) {
	const [dia, mes, ano] = campo.split('/');
	if (ano.length==2) { ano2='20'+ano;} else { ano2=ano;}
	return new Date(ano2,mes-1,dia);
}

function ConvertTime(campo) {
	const strArray = campo.split(':');
	if (strArray.length==2) {
	  hora=strArray[0];
	  min=strArray[1];
	  seg='00';
	} else
	{
	  if (strArray.length==3) {
		  hora=strArray[0];
		  min=strArray[1];
		  seg=strArray[2];
	  } else {
	    return new Date(0);
	  }
	}
	return new Date(0,0,0,hora,min,seg);
}

function ConvertDateTimeBrasil(campo) {
    const [data,horario] = campo.split(' ');
    
	const [dia, mes, ano] = data.split('/');
	if (ano.length==2) { ano2='20'+ano;} else { ano2=ano;}
	
	const strArray = horario.split(':');
	if (strArray.length==2) {
	  hora=strArray[0];
	  min=strArray[1];
	  seg='00';
	} else
	{
	  if (strArray.length==3) {
		  hora=strArray[0];
		  min=strArray[1];
		  seg=strArray[2];
	  } else {
	    hora='00';
	    min='00';
	    seg='00';
	  }
	}
	return new Date(ano,mes-1,dia,hora,min,seg);
}

function check_date(data){
var checkstr = "0123456789";
//var DateField = data;
var Datevalue = "";
var DateTemp = "";
var separator = "/";
var day;
var month;
var year;
var leap = 0;
var err = 0;
var i;
   err = 0;
   DateValue = data;
   /* Delete all chars except 0..9 */
   for (i = 0; i < DateValue.length; i++) {
	  if (checkstr.indexOf(DateValue.substr(i,1)) >= 0) {
	     DateTemp = DateTemp + DateValue.substr(i,1);
	  } else { if ( DateValue.substr(i,1)!=separator ) { alert("Data inválida -> "+DateValue); return (false); } }
   }
   DateValue = DateTemp;
   /* Always change date to 8 digits - string*/
   /* if year is entered as 2-digit / always assume 20xx */
   if (DateValue.length == 6) {
      DateValue = DateValue.substr(0,4) + '20' + DateValue.substr(4,2); }
   if (DateValue.length != 8) {
      err = 19;}
   /* year is wrong if year = 0000 */
   year = DateValue.substr(4,4);
   if (year == 0) {
      err = 20;
   }
   /* Validation of month*/
   month = DateValue.substr(2,2);
   if ((month < 1) || (month > 12)) {
      err = 21;
   }
   /* Validation of day*/
   day = DateValue.substr(0,2);
   if (day < 1) {
     err = 22;
   }
   /* Validation leap-year / february / day */
   if ((year % 4 == 0) || (year % 100 == 0) || (year % 400 == 0)) {
      leap = 1;
   }
   if ((month == 2) && (leap == 1) && (day > 29)) {
      err = 23;
   }
   if ((month == 2) && (leap != 1) && (day > 28)) {
      err = 24;
   }
   /* Validation of other months */
   if ((day > 31) && ((month == "01") || (month == "03") || (month == "05") || (month == "07") || (month == "08") || (month == "10") || (month == "12"))) {
      err = 25;
   }
   if ((day > 30) && ((month == "04") || (month == "06") || (month == "09") || (month == "11"))) {
      err = 26;
   }
   /* if 00 ist entered, no error, deleting the entry */
   if ((day == 0) && (month == 0) && (year == 00)) {
      err = 0; day = ""; month = ""; year = ""; separator = "";
   }
   /* if no error, write the completed date to Input-Field (e.g. 13.12.2001) */
   if (err == 0) {
      //DateField.value = day + separator + month + separator + year;
						return (true);
   }
   /* Error-message if err != 0 */
   else {
      alert("A data não é válida!");
      return (false);
   }
}
