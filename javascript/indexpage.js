$(document).ready(function () {
    $('.modal-cover-content').click(function(e){
        let modal = document.querySelector('.modal-cover-content');
        let modal_bg = document.querySelector('.modal-cover-backdrop');
        
        if(e.target.tagName==='BUTTON'){
          if(e.target.textContent==='關閉視窗'){  
            modal.style.display="none";
            modal_bg.style.display="none";
          }
          
        }
    })
    $('.modal-cover-button').click(function(e){
        let modal_text = document.querySelector('.modal-origin-text');
        $(this).toggleClass('active');
        modal_text.style.display='none';
        
        $('.modal-cover-text').toggleClass('active');
    })
});
