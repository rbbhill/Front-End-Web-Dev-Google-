$(function() {
  // Select color input
  // Select size input
  // When size is submitted by the user, call makeGrid()

  const submitButton = $('input[type="submit"]'),
    canvas = $('#pixel_canvas');

  submitButton.click(function(e) {
      e.preventDefault();
      makeGrid();


  function makeGrid() {
    let col = $("#input_height").val(),
      row = $("#input_width").val(),
      canvasColumn,
      canvasRow;

    canvas.children().remove();

    for (let i = 0; i < col; i++) {
      canvasColumn += "<tr></tr>";
    }

    for (let j = 0; j < row; j++) {
      canvasRow += "<td></td>";
    }

    canvas
      .append(canvasColumn)
      .children()
      .append(canvasRow);
  }


  });

  canvas.on("click", "td", function(e) {
    e.preventDefault();
    let color = $("#colorPicker").val(),
      defaultColor = this.style.backgroundColor;
    // set color and erase color to default
    if (defaultColor === "") {
      $(this).css("backgroundColor", color);
    } else {
      $(this).css("backgroundColor", "");
    }
  });
});