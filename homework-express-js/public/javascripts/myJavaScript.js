function deleteUser(id) {
  $.ajax({
    url: `/users/:${id}`,
    type: 'DELETE',
    success: result => {
      console.log(result);
    },
  });
}
