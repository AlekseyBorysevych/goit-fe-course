"use strict";

const galleryItems = [
    { preview: 'https://images.pexels.com/photos/460823/pexels-photo-460823.jpeg?auto=compress&cs=tinysrgb&h=350', fullview: 'https://images.pexels.com/photos/460823/pexels-photo-460823.jpeg?auto=compress&cs=tinysrgb&h=1024', alt: "alt text 1" },
    { preview: 'https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg?auto=compress&cs=tinysrgb&h=350', fullview: 'https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg?auto=compress&cs=tinysrgb&h=1024', alt: "alt text 2" },
    { preview: 'https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&h=350', fullview: 'https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&h=1024', alt: "alt text 3" },
    { preview: 'https://images.pexels.com/photos/247522/pexels-photo-247522.jpeg?auto=compress&cs=tinysrgb&h=350', fullview: 'https://images.pexels.com/photos/247522/pexels-photo-247522.jpeg?auto=compress&cs=tinysrgb&h=1024', alt: "alt text 4" },
    { preview: 'https://images.pexels.com/photos/9080/night-garden-yellow-animal.jpg?auto=compress&cs=tinysrgb&h=350', fullview: 'https://images.pexels.com/photos/9080/night-garden-yellow-animal.jpg?auto=compress&cs=tinysrgb&h=1024', alt: "alt text 5" },
    { preview: 'https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&h=350', fullview: 'https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&h=1024', alt: "alt text 6" },
  ];

  class Gallery {
    constructor({items, parentNode, defaultActiveItem}) {
        this.items=items;
        this.parentNode=parentNode;
        this.defaultActiveItem=defaultActiveItem;

        this.div=document.createElement("div");
        this.div.classList.add("fullview");
        this.parentNode.appendChild(this.div);

        this.img = document.createElement("img");
        this.img.setAttribute("src",this.items[defaultActiveItem].fullview);
        document.querySelector(".fullview").appendChild(this.img);  
        
        this.ul = document.createElement("ul");
        this.ul.classList.add("preview");
        this.parentNode.appendChild(this.ul);

        this.items.map((elem)=>{
          //console.log(elem);
          this.li=document.createElement("li");
          this.previewImg = document.createElement("img");
          this.previewImg.setAttribute("src",elem.preview);
          this.previewImg.setAttribute("alt",elem.alt);
          this.previewImg.setAttribute("data-fullview",elem.fullview);
          this.li.appendChild(this.previewImg);
          this.ul.appendChild(this.li);
        });

        this.ul.addEventListener("click",this.onclick.bind(this));

    }   
    onclick (){
      if (document.querySelector(".selected")){document.querySelector(".selected").classList.remove("selected")};
      if (event.target.hasAttribute("data-fullview")){
        this.img.setAttribute("src",event.target.getAttribute("data-fullview"));
        event.target.classList.add("selected")
    };
    }
  };


  new Gallery({
    items: galleryItems,
    parentNode: document.querySelector('.image-gallery'),
    defaultActiveItem: 1
  });                            
