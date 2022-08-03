var pokemons = [
    { index:'001', name:'妙蛙種子', height:0.7, weight:6.9, attr:'草' },
    { index:'002', name:'妙蛙草', height:1, weight:13, attr:'草' },
    { index:'003', name:'妙蛙花', height:2, weight:100, attr:'草' },
    { index:'004', name:'小火龍', height:0.6, weight:8.5, attr:'火' },
    { index:'005', name:'火恐龍', height:1.1, weight:19, attr:'火' }
];

renderTable();

// 將資料更新到網頁的表格
function renderTable () {
    $('tbody').empty();
    for(var i =0;i<pokemons.length;i++){
        var row=`<tr>
                <td>${pokemons[i].index}</td>
                <td><div class="icon icon-${pokemons[i].index}"></div></td>
                <td>${pokemons[i].name}</td>
                <td>${pokemons[i].weight}</td>
                <td>${pokemons[i].height}</td>
                <td>${pokemons[i].attr}</td>
            </tr>`
        $('tbody').append(row);       
    } 

}

// 使用者新增一筆資料
$('#create').click(function () {
    var ind=prompt("請輸入編號：");
    var n=prompt("請輸入姓名：");
    var w=prompt("請輸入體重：");
    var h=prompt("請輸入身高：");
    var a=prompt("請輸入屬性：");
    
    var new_obj={
        index:ind,
        name:n,
        weight:w,
        height:h,
        attr:a
    }
    pokemons.push(new_obj);
    renderTable()

});
