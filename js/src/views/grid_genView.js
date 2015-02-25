App.GridGenView = Ember.View.extend({
    didInsertElement: function() {
    // {  target  {  overflow  {  face  }}}

    var columnNumber = 9,
      rowNumber = 3,
      gridWidth = 748,
      gridHeight = 250,
      horizontalFaceLength = gridWidth / columnNumber +1,
      verticalFaceLength = gridHeight / rowNumber +1,
      faceCount = columnNumber * rowNumber,
      faceImageSource = ["face-0.png",  "face-122.png",  "face-26.png", "face-50.png", "face-75.png", "face-1.png",  "face-123.png",  "face-27.png", "face-51.png", "face-76.png", "face-10.png", "face-124.png",  "face-28.png", "face-52.png", "face-77.png", "face-100.png",  "face-125.png",  "face-29.png", "face-53.png", "face-78.png", "face-101.png",  "face-126.png",  "face-3.png",  "face-54.png", "face-79.png", "face-102.png",  "face-127.png",  "face-30.png", "face-55.png", "face-8.png", "face-103.png",  "face-128.png",  "face-31.png", "face-56.png", "face-80.png", "face-104.png",  "face-129.png",  "face-32.png", "face-57.png", "face-81.png", "face-105.png",  "face-13.png", "face-33.png", "face-58.png", "face-82.png", "face-106.png",  "face-130.png",  "face-34.png", "face-59.png", "face-83.png", "face-107.png",  "face-131.png",  "face-35.png", "face-6.png",  "face-84.png", "face-108.png",  "face-132.png",  "face-36.png", "face-60.png", "face-85.png", "face-109.png",  "face-133.png",  "face-37.png", "face-61.png", "face-86.png", "face-11.png", "face-134.png",  "face-38.png", "face-62.png", "face-87.png", "face-110.png",  "face-14.png", "face-39.png", "face-63.png", "face-88.png", "face-111.png",  "face-15.png", "face-4.png",  "face-64.png", "face-89.png", "face-112.png",  "face-16.png", "face-40.png", "face-65.png", "face-9.png", "face-113.png",  "face-17.png", "face-41.png", "face-66.png", "face-90.png", "face-114.png",  "face-18.png", "face-42.png", "face-67.png", "face-91.png", "face-115.png",  "face-19.png", "face-43.png", "face-68.png", "face-92.png", "face-116.png",  "face-2.png",  "face-44.png", "face-69.png", "face-93.png", "face-117.png",  "face-20.png", "face-45.png", "face-7.png",  "face-94.png", "face-118.png",  "face-21.png", "face-46.png", "face-70.png", "face-95.png", "face-119.png",  "face-22.png", "face-47.png", "face-71.png", "face-96.png", "face-12.png", "face-23.png", "face-48.png", "face-72.png", "face-97.png", "face-120.png",  "face-24.png", "face-49.png", "face-73.png", "face-98.png"],
      randomFace,
      faceLength

    // Define maximum dimension for grid
    if(horizontalFaceLength < verticalFaceLength) {
      console.log("horizontalFaceLength: "+ horizontalFaceLength+" < verticalFaceLength: "+verticalFaceLength )
      var faceLength = horizontalFaceLength
    }
    else {
      console.log("verticalFaceLength: "+ verticalFaceLength+" < horizontalFaceLength: "+horizontalFaceLength )
      var faceLength = verticalFaceLength
    }

    // Style target
    $(".gridTarget").css({
      "background":"#eee",
      "border":"1px solid #ddd",
      "margin":"0 1em 1em 1em",
      "width":gridWidth,
      "height":gridHeight,
      "display":"inline-block",
      "overflow":"hidden"
    })

    // Build controls
    $(".gridTarget").parent().prepend("
      <div class='controls'>
        <label for='gridWidth'>Grid Width</label><input type='number' min='0' id='gridWidth' value="+gridWidth+"></input>
        <label for='gridHeight'>Grid Height</label><input type='number' min='0' id='gridHeight' value="+gridHeight+"></input>
        <label for='columnNumber'>Column number</label><input type='number' min='0' id='columnNumber' value="+columnNumber+"></input>
        <label for='rowNumber'>Row number</label><input type='number' min='0' id='rowNumber' value="+rowNumber+"></input>
        <label for='faceLength'>Face length</label><input type='number' min='0' id='faceLength' value="+faceLength+"></input>
        <button class='randomize'>Randomize faces</button>
      </div>
    ")
    $(".controls").css({
      "padding":"2em"
    })



    // Build grid overflow
    $(".gridTarget").append("
      <div class='gridOverflow'></div>
    ")
    $(".gridOverflow").css({
      "min-width":faceLength*columnNumber,
      "min-height":faceLength*rowNumber,
    })

    function draw() {
      $(".gridOverflow").children().remove()
      for(row=0; row<rowNumber;row++) {
        for(column=0; column<columnNumber;column++) {
          var row = parseInt(row),
            colN = parseInt(row)*parseInt(columnNumber),
            column = parseInt(column),
            number = parseInt(column)+(colN)

          $(".gridOverflow").append("
            <div class='face "+number+"'>
            </div>
          ")
          $(".face."+number).css({
            "background-image":"url('img/grid/"+faceImageSource[number]+"')"
          })
        }

        $(".gridOverflow").append("<br/>")
      }

      $("br").css({
        "clear":"both"
      })
    }
    draw()

    $(".face").css({
      "border-bottom":"1px solid white",
      "border-right":"1px solid white",
      "float":"left",
      "background-size":"auto "+ faceLength*1.1 +"px",
      "background-position-x":"50%",
      "background-position-y":"50%",
      "height":faceLength,
      "width":faceLength,
      "overflow":"hidden"
    })

    // Controls
    $("input").change(function() {
      if ( $(this).is("#gridWidth") )
        {
          var newWidth = $("input#gridWidth").val()
          console.log(newWidth)
          $(".gridTarget").css("width",newWidth)
        }
      if ( $(this).is("#gridHeight") )
        {
          var newHeight = $("input#gridHeight").val()
          console.log(newHeight)
          $(".gridTarget").css("height",newHeight)
        }
      if ( $(this).is("#columnNumber") )
        {
          var newColNumber = $("input#columnNumber").val()
          console.log(newColNumber)
          columnNumber = newColNumber
          draw()
        }
      if ( $(this).is("#rowNumber") )
        {
          var newWidth = $("input#gridWidth").val()
          console.log($("input#gridWidth").val())
          $(".gridTarget").css("width",newWidth)
        }
      if ( $(this).is("#faceLength") )
        {
          var newWidth = $("input#gridWidth").val()
          console.log($("input#gridWidth").val())
          $(".gridTarget").css("width",newWidth)
        }
    })
  }
})