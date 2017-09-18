
(function() {
var theImages = document.querySelectorAll('.image-holder'),
    theHeading = document.querySelector('.heading'),
    theSubhead = document.querySelector('.main-copy h2'),
    theSeasonText = document.querySelector('.main-copy p'),
    appliedClass;

    function changeElements() {
    let subImages = document.querySelector('.subImagesContainer');
    let objectIndex = dynamicContent[this.id];

    theSubhead.firstChild.nodeValue = objectIndex.headline;
    theSeasonText.firstChild.nodeValue = objectIndex.text;

    theSubhead.classList.add(this.id);
    theHeading.classList.add(this.id);

    appliedClass = this.id;
}

  theImages.forEach(function(image, index){
    image.addEventListener('click', changeElements, false);
});

})();
