(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);

consolelog("bhcwf");
// const AddToCart=({product}) => {
//     const{id , colors, stock} = product;
//     const[color, setcolor] = useState(colors[0]);
//     const[amount, setAmount] = useState(1);

//     const SetDecrease =() =>{
//        if(amount>1) setAmount[amount-1];
//        else setAmount[1];
//     };

//     const SetIncrease =() =>{
//         if(amount<stock) setAmount[amount+1];
//         else setAmount[stock];
//      };

//      return(
//         <Wrapper>
//             <div className="colors">
//                 <p>
//                     Color
//                     {colors.map((curColor, index) =>{
//                         return(
//                             <button
//                             key={index}
//                             style={{ backgroundColor: curColor}}
//                             className={color===curColor?"btnStyle active":"btnStyle"}
//                             onClick={() => setcolor(curColor)}>
//                                 {color===curColor?<FaCheck className="checkStyle"/>:null}
//                             </button>
//                         );
//                     })}
//                 </p>
//             </div>
//             <cartAmountToggle
//             amount={amount}
//             SetDecrease={SetDecrease}
//             setIncrease={SetIncrease}
//             />

//             <NavLink to="/cart">
//                 <button className="btn">Add To Cart</button>
//             </NavLink>
//         </Wrapper>
//      );

// };
// console.log("hdcid");