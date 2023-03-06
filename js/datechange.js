function Change(){
    let inputMonth  = document.forms["form1"]['month'].value;

    switch(parseInt(inputMonth)){
        case 1:
            document.getElementById('date').innerHTML = 'Tháng 1 có 31 ngày';
            break;
        case 2:
            document.getElementById('date').innerHTML = 'Tháng 2 có 28 hoặc 29 ngày';
            break;
        case 3:
            document.getElementById('date').innerHTML = 'Tháng 3 có 31 ngày';
            break;
        case 4:
            document.getElementById('date').innerHTML = 'Tháng 4 có 30 ngày';
            break;
        case 5:
            document.getElementById('date').innerHTML = 'Tháng 5 có 31 ngày';
            break;
        case 6:
            document.getElementById('date').innerHTML = 'Tháng 6 có 30 ngày';
            break;
        case 7:
            document.getElementById('date').innerHTML = 'Tháng 7 có 31 ngày';
            break;
        case 8:
            document.getElementById('date').innerHTML = 'Tháng 8 có 31 ngày';
            break;
        case 9:
            document.getElementById('date').innerHTML = 'Tháng 9 có 30 ngày';
            break;
        case 10:
            document.getElementById('date').innerHTML = 'Tháng 19 có 31 ngày';
            break;
        case 11:
            document.getElementById('date').innerHTML = 'Tháng 11 có 30 ngày';
            break;
        case 12:
            document.getElementById('date').innerHTML = 'Tháng 12 có 31 ngày';
            break;
        // default:
        //     document.getElementById('date').innerHTML = 'Không có tháng trùng với tháng đã nhập';
        //     break;
    }
}