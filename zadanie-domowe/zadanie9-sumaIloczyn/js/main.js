function sumaIloczyn(array) {

    var suma = 0,
        iloczyn = 1;
    for (var i = 0; i < array.length; i++) {


        suma = suma + array[i];
        iloczyn *= array[i];
    }

    console.log(suma + " " + iloczyn);

}

sumaIloczyn([1, 2, 3, 4, 5, 6]);

