console.log("Hello world!");

console.log("VSCode!");

let test = "Hello world! TEST";

const stala = "Nie może być zmieniona";

console.log(test);

// blok kodu
{
    console.log(test);

    console.log(zmienna);
    // zmienna jest deklarowana niżej - hosting

    var zmienna = "Globalna w danym pliku";
    // jest to hosting, są hostowane czyli są dostępne przed deklaracją
    // jako że są one dostępne globalnie, może to doprowadzić do problemów z zarządzaniem pamięcią i zależnościami między zmiennymi
    // dlatego zaleca się używanie let i const

    // nazwy zmiennych muszą zaczynać się od litery lub znaku podkreślenia, nie można używać spacji
    // nie można używać słów kluczowych np. let, const, var, console, function itd.
    // nie można używać znaków specjalnych np. !, @, #, $, %, ^, & itd.
    // nie można używać polskich znaków
    // nie można używać cyfr na początku nazwy zmiennej
    // nazwy zmiennych są case sensitive, czyli wielkość liter ma znaczenie
    // nazwy zmiennych powinny być pisane w języku angielskim
    // nazwy zmiennych powinny być pisane w notacji camelCase
    // nazwy zmiennych powinny być pisane w sposób opisowy
    // nazwy zmiennych powinny być pisane w sposób jednoznaczny
    // nazwy zmiennych powinny być pisane w sposób zwięzły
    // nazwy zmiennych powinny być pisane w sposób konsekwentny
    // nazwy zmiennych powinny być pisane w sposób zrozumiały dla innych osób
    // nazwy zmiennych powinny być pisane w sposób zrozumiały dla przyszłych programistów
    // nazwy zmiennych powinny być pisane w sposób zrozumiały dla Ciebie
    // nazwy zmiennych powinny być pisane w sposób zrozumiały dla Twojego przyszłego ja

    /*

    Komentarz blokowy

    Ctrl + K + C - zakomentowanie zaznaczonego kodu
    Ctrl + K + U - odkomentowanie zaznaczonego kodu
    Ctrl + / - zakomentowanie/odkomentowanie zaznaczonego kodu

    */

    // Typy zmeinnych w JS - string, number, bigint, boolean, undefined, null, object, symbol

    // string - ciąg (sekwencja) znaków, tekst, reprezentowane za pomocą pojedyńczych lub podwójnych cudzysłowów lub backticków

    // number - liczba, reprezentowana za pomocą cyfr, mogą byc całkowite lub zmiennoprzecinkowe

    // bigint - liczba całkowita o dowolnej precyzji, dopisujemy na końcu literał n, np. 10n

    // boolean - wartość logiczna, true lub false

    // undefined - wartość specjalna, oznacza brak wartości (jest zadeklarowana, nie ma przypisanej wartości)

    // null - wartość specjalna, oznacza brak wartości lub brak obiektu, musi być jawnie przypisana do zmiennej aby wskazywać na brak wartości

    // object - obiekt, reprezentuje złożone dane strukturalne, umożliwia grupowanie i przechowywanie danych w postaci klucz-wartość, jest to kolekcja właściwości, każda właściwość ma nazwę i wartość, właściwości mogą zawierać funkcje, które są wtedy nazywane metodami obiektu, deklaracja obiektu za pomocą nawiasów klamrowych {}, właściwości obiektu są oddzielone przecinkami, właściwości obiektu mogą być dostępne za pomocą kropki lub nawiasów kwadratowych, np. obiekt.wlasciwosc lub obiekt["wlasciwosc"], można zagnieżdżać obiekty w obiektach, np. obiekt.wlasciwosc.wlasciwosc, używany również jako typ danych dla tablic -> typeof => object, Daty to również obiekty
    
    // symbol - symbol, używany jako unikalny identyfikator dla obiektów, wprowadzony w ES6 (ECMAScript 6), tworzony za pomocą funkcji Symbol(), np. let id = Symbol(), zawsze tworzy nowy, unikalny symbol nawet jeśli użyszsz tej samej funkcji więcej niż raz, możemy również tworzyć symbole z opisem -> Symbol('opis')
}