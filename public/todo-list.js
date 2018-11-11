$(document).ready(function(){

  $.ajax({
    type: 'GET',
    url: '/api/v1/items',
    dataType: 'json',
    contentType: 'application/json'
  }).done(function(data){
    console.log(data);
    $.map(data.list, function(item, i){
      console.log(item);
      $('#items').append('<li>' + item.item + '</li>');

    });
  });

  $('form').on('submit', function(){

      let item = $('form input');
      let todo = JSON.stringify({item: item.val()});

      $.ajax({
        type: 'POST',
        url: '/api/v1/items',
        dataType: 'json',
        contentType: "application/json",
        data: todo,
        success: function(data){
          location.reload();
        }
      });
  });

  $('li').on('click', function(){

      let itemId = JSON.stringify(this.id);

      $.ajax({
        type: 'DELETE',
        url: '/api/v1/items',
        dataType: 'json',
        contentType: 'application/json',
        data: itemId,
        success: function(data){
          location.reload();
        }
      });
  });
});
