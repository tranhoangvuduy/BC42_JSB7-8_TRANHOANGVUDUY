
let array = [];
document.getElementById('btnThemSo').onclick = function () {
    let nhapSo = +document.getElementById('nhapSoN').value;
    array.push(nhapSo);

    document.getElementById('ketQua').innerHTML = array;


}
// <!-- BT1: TÍNH TỔNG CÁC SỐ DƯƠNG TRONG MẢNG -->
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];


        }


    }
    return sum;
}
document.getElementById('btnTinhTong').onclick = function () {
    sumArray(array);
    document.getElementById('ketQua1').innerHTML = sumArray(array);

}
// <!-- BT2: ĐẾM SỐ DƯƠNG TRONG MẢNG -->
function demSoDuong(array) {
    let demDuong = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            demDuong++;
        }
    }
    return demDuong;
}

document.getElementById('btnDemSo').onclick = function () {
    demSoDuong(array);

    document.getElementById('ketQua2').innerHTML = 'Số dương:' + " " + demSoDuong(array);

}
// <!-- BT3: TÌM SỐ NHỎ NHẤT -->
function minEl(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}
document.getElementById('btnTimSoNhoNhat').onclick = function () {
    minEl(array);

    document.getElementById('ketQua3').innerHTML = 'Số nhỏ nhất:' + " " + minEl(array);

}
// BT4: TÌM SỐ DƯƠNG NHỎ NHẤT
function minPlusEl(array) {
    let min = -1;
    for (let i = 0; i < array.length; i++) {
        if ((min == -1 || min > array[i]) && array[i] > 0) {
            min = array[i];
        }
    }
    return min;
}
document.getElementById('btnTimSoDuongNhoNhat').onclick = function () {
    minPlusEl(array);


    document.getElementById('ketQua4').innerHTML = 'Số dương nhỏ nhất:' + " " + minPlusEl(array);

}
// <!-- BT5: TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG -->
function soChan(array) {
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            num = array[i];

        }


    }
    return num;

}
document.getElementById('btnTimSoChan').onclick = function () {
    soChan(array);


    document.getElementById('ketQua5').innerHTML = 'Số chẵn cuối cùng:' + " " + soChan(array);

}
// <!-- BT6: ĐỔI CHỖ -->
function doiCho(a, b) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {

        temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }
    return array;


}
document.getElementById('btnDoiCho').onclick = function () {

    let viTri1 = +document.getElementById('nhapSoVT1').value;
    let viTri2 = +document.getElementById('nhapSoVT2').value;
    // doiCho(viTri1, viTri2);
    let result = doiCho(viTri1, viTri2);

    // console.log(result);
    document.getElementById('ketQua6').innerHTML = result;
}
// BT7: SẮP XẾP MẢNG THEO THỨ TỰ TĂNG DẦN
document.getElementById('btnSapXep').onclick = function () {
    array.sort((a, b) => a - b);

    document.getElementById('ketQua7').innerHTML = 'Mảng sau khi sắp xếp:' + " " + array;


}
// BT8: TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN TRONG MẢNG 
function soNguyenTo(n) {
    if (n < 2) {
        return false;
    }
    if (n == 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    let isPrime = true;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            isPrime = false;
        }
    }
    return isPrime;
}
function timSoNguyenToDau() {
    for (let i = 0; i < array.length; i++) {
        if (soNguyenTo(array[i]) == true) {
            return array[i];
        }
    }
    return -1;

}

document.getElementById('btnSoNT').onclick = function () {
    let nguyenToDau = timSoNguyenToDau();

    document.getElementById('ketQua8').innerHTML = nguyenToDau;

}
// BT9: ĐẾM SỐ NGUYÊN
let soThuc = [];
document.getElementById('btnThemSo1').onclick = function () {
    let nhapSoThuc = +document.getElementById('nhapThemSo').value;
    soThuc.push(nhapSoThuc);

    document.getElementById('result').innerHTML = soThuc;


}
document.getElementById('btnDemSN').onclick = function () {
    let demSN = 0;
    for (let i = 0; i < soThuc.length; i++) {
        if (Number.isInteger(soThuc[i])) {
            demSN++;
        }

    }
    console.log(demSN);
    document.getElementById('ketQua9').innerHTML = "Số nguyên:" + " " + demSN;
}




// BT10:  So sánh số lượng số âm và số dương

document.getElementById('btnSoSanh').onclick = function () {
    let demSoAm = 0;
    let demSoDuong = 0;
    let dem0 = 0;
    let ketLuan = '';
    // Đếm số âm và dương
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            demSoDuong++;
        } else if (array[i] < 0) {
            demSoAm++;
        } else {
            dem0++;
        }
    }
    if (demSoDuong > demSoAm) {
        ketLuan = 'Số dương > Số âm';
    } else if (demSoAm > demSoDuong) {
        ketLuan = 'Số âm > số dương';
    } else {
        ketLuan = 'Số âm = số dương';
    }
    document.getElementById('ketQua10').innerHTML = ketLuan;





}


