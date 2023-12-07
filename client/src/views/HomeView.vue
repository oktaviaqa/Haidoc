<script >
import Header from '../components/Header.vue'
import Banner from '../components/Banner.vue'
import Category from '../components/Category.vue'
import Sidebar from '../components/Sidebar.vue'
import Medicine from '../components/Medicine.vue'
export default {
  components: {
    Header,
    Banner,
    // Category,
    Sidebar,
    Medicine
  }
}
</script>

<template>

<!-- Header -->
<Header />

<main>

<!--
  - BANNER
-->
<Banner />


<!--
  - CATEGORY
-->
<!-- <Category /> -->


<!--
  - PRODUCT
-->

<div class="product-container">

  <div class="container">


    <!--
      - SIDEBAR
    -->

<Sidebar />



    <div class="product-box">




      <!--
        - PRODUCT FEATURED
      -->

      <!-- <div class="product-featured">

        <h2 class="title">Deal of the day</h2>

        <div class="showcase-wrapper has-scrollbar">

          <div class="showcase-container">

            <div class="showcase">
              
              <div class="showcase-banner">
                <img src="./assets/images/products/shampoo.jpg" alt="shampoo, conditioner & facewash packs" class="showcase-img">
              </div>

              <div class="showcase-content">
                
                <div class="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </div>

                <a href="#">
                  <h3 class="showcase-title">shampoo, conditioner & facewash packs</h3>
                </a>

                <p class="showcase-desc">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum
                  dolor dolor sit amet consectetur Lorem ipsum dolor
                </p>

                <div class="price-box">
                  <p class="price">$150.00</p>

                  <del>$200.00</del>
                </div>

                <button class="add-cart-btn">add to cart</button>

                <div class="showcase-status">
                  <div class="wrapper">
                    <p>
                      already sold: <b>20</b>
                    </p>

                    <p>
                      available: <b>40</b>
                    </p>
                  </div>

                  <div class="showcase-status-bar"></div>
                </div>

                <div class="countdown-box">

                  <p class="countdown-desc">
                    Hurry Up! Offer ends in:
                  </p>

                  <div class="countdown">

                    <div class="countdown-content">

                      <p class="display-number">360</p>

                      <p class="display-text">Days</p>

                    </div>

                    <div class="countdown-content">
                      <p class="display-number">24</p>
                      <p class="display-text">Hours</p>
                    </div>

                    <div class="countdown-content">
                      <p class="display-number">59</p>
                      <p class="display-text">Min</p>
                    </div>

                    <div class="countdown-content">
                      <p class="display-number">00</p>
                      <p class="display-text">Sec</p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div class="showcase-container">
          
            <div class="showcase">
          
              <div class="showcase-banner">
                <img src="./assets/images/products/jewellery-1.jpg" alt="Rose Gold diamonds Earring" class="showcase-img">
              </div>
          
              <div class="showcase-content">
          
                <div class="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </div>
          
                <h3 class="showcase-title">
                  <a href="#" class="showcase-title">Rose Gold diamonds Earring</a>
                </h3>
          
                <p class="showcase-desc">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum
                  dolor dolor sit amet consectetur Lorem ipsum dolor
                </p>
          
                <div class="price-box">
                  <p class="price">$1990.00</p>
                  <del>$2000.00</del>
                </div>
          
                <button class="add-cart-btn">add to cart</button>
          
                <div class="showcase-status">
                  <div class="wrapper">
                    <p> already sold: <b>15</b> </p>
          
                    <p> available: <b>40</b> </p>
                  </div>
          
                  <div class="showcase-status-bar"></div>
                </div>
          
                <div class="countdown-box">
          
                  <p class="countdown-desc">Hurry Up! Offer ends in:</p>
          
                  <div class="countdown">
                    <div class="countdown-content">
                      <p class="display-number">360</p>
                      <p class="display-text">Days</p>
                    </div>
          
                    <div class="countdown-content">
                      <p class="display-number">24</p>
                      <p class="display-text">Hours</p>
                    </div>
          
                    <div class="countdown-content">
                      <p class="display-number">59</p>
                      <p class="display-text">Min</p>
                    </div>
          
                    <div class="countdown-content">
                      <p class="display-number">00</p>
                      <p class="display-text">Sec</p>
                    </div>
                  </div>
          
                </div>
          
              </div>
          
            </div>
          
          </div>

        </div>

      </div> -->



      <!--
        - MEDICINE
      -->
      <Medicine />

    </div>

  </div>

</div>






<!--
  - BLOG
-->

<!-- <div class="blog">

  <div class="container">

    <div class="blog-container has-scrollbar">

      <div class="blog-card">

        <a href="#">
          <img src="./assets/images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner">
        </a>

        <div class="blog-content">

          <a href="#" class="blog-category">Fashion</a>

          <a href="#">
            <h3 class="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
          </a>

          <p class="blog-meta">
            By <cite>Mr Admin</cite> / <time datetime="2022-04-06">Apr 06, 2022</time>
          </p>

        </div>

      </div>

      <div class="blog-card">
      
        <a href="#">
          <img src="./assets/images/blog-2.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
            class="blog-banner" width="300">
        </a>
      
        <div class="blog-content">
      
          <a href="#" class="blog-category">Clothes</a>
      
          <h3>
            <a href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
          </h3>
      
          <p class="blog-meta">
            By <cite>Mr Robin</cite> / <time datetime="2022-01-18">Jan 18, 2022</time>
          </p>
      
        </div>
      
      </div>

      <div class="blog-card">
      
        <a href="#">
          <img src="./assets/images/blog-3.jpg" alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
            class="blog-banner" width="300">
        </a>
      
        <div class="blog-content">
      
          <a href="#" class="blog-category">Shoes</a>
      
          <h3>
            <a href="#" class="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</a>
          </h3>
      
          <p class="blog-meta">
            By <cite>Mr Selsa</cite> / <time datetime="2022-02-10">Feb 10, 2022</time>
          </p>
      
        </div>
      
      </div>

      <div class="blog-card">
      
        <a href="#">
          <img src="./assets/images/blog-4.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
            class="blog-banner" width="300">
        </a>
      
        <div class="blog-content">
      
          <a href="#" class="blog-category">Electronics</a>
      
          <h3>
            <a href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
          </h3>
      
          <p class="blog-meta">
            By <cite>Mr Pawar</cite> / <time datetime="2022-03-15">Mar 15, 2022</time>
          </p>
      
        </div>
      
      </div>

    </div>

  </div>

</div> -->

</main>

<footer>

<div class="footer-category">

  <div class="container">

    <h2 class="footer-category-title">Brand directory</h2>

    <div class="footer-category-box">

      <h3 class="category-box-title">Fashion :</h3>

      <a href="#" class="footer-category-link">T-shirt</a>
      <a href="#" class="footer-category-link">Shirts</a>
      <a href="#" class="footer-category-link">shorts & jeans</a>
      <a href="#" class="footer-category-link">jacket</a>
      <a href="#" class="footer-category-link">dress & frock</a>
      <a href="#" class="footer-category-link">innerwear</a>
      <a href="#" class="footer-category-link">hosiery</a>

    </div>

    <div class="footer-category-box">
      <h3 class="category-box-title">footwear :</h3>
    
      <a href="#" class="footer-category-link">sport</a>
      <a href="#" class="footer-category-link">formal</a>
      <a href="#" class="footer-category-link">Boots</a>
      <a href="#" class="footer-category-link">casual</a>
      <a href="#" class="footer-category-link">cowboy shoes</a>
      <a href="#" class="footer-category-link">safety shoes</a>
      <a href="#" class="footer-category-link">Party wear shoes</a>
      <a href="#" class="footer-category-link">Branded</a>
      <a href="#" class="footer-category-link">Firstcopy</a>
      <a href="#" class="footer-category-link">Long shoes</a>
    </div>

    <div class="footer-category-box">
      <h3 class="category-box-title">jewellery :</h3>
    
      <a href="#" class="footer-category-link">Necklace</a>
      <a href="#" class="footer-category-link">Earrings</a>
      <a href="#" class="footer-category-link">Couple rings</a>
      <a href="#" class="footer-category-link">Pendants</a>
      <a href="#" class="footer-category-link">Crystal</a>
      <a href="#" class="footer-category-link">Bangles</a>
      <a href="#" class="footer-category-link">bracelets</a>
      <a href="#" class="footer-category-link">nosepin</a>
      <a href="#" class="footer-category-link">chain</a>
      <a href="#" class="footer-category-link">Earrings</a>
      <a href="#" class="footer-category-link">Couple rings</a>
    </div>

    <div class="footer-category-box">
      <h3 class="category-box-title">cosmetics :</h3>
    
      <a href="#" class="footer-category-link">Shampoo</a>
      <a href="#" class="footer-category-link">Bodywash</a>
      <a href="#" class="footer-category-link">Facewash</a>
      <a href="#" class="footer-category-link">makeup kit</a>
      <a href="#" class="footer-category-link">liner</a>
      <a href="#" class="footer-category-link">lipstick</a>
      <a href="#" class="footer-category-link">prefume</a>
      <a href="#" class="footer-category-link">Body soap</a>
      <a href="#" class="footer-category-link">scrub</a>
      <a href="#" class="footer-category-link">hair gel</a>
      <a href="#" class="footer-category-link">hair colors</a>
      <a href="#" class="footer-category-link">hair dye</a>
      <a href="#" class="footer-category-link">sunscreen</a>
      <a href="#" class="footer-category-link">skin loson</a>
      <a href="#" class="footer-category-link">liner</a>
      <a href="#" class="footer-category-link">lipstick</a>
    </div>

  </div>

</div>

<div class="footer-nav">

  <div class="container">

    <ul class="footer-nav-list">

      <li class="footer-nav-item">
        <h2 class="nav-title">Popular Categories</h2>
      </li>

      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Fashion</a>
      </li>

      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Electronic</a>
      </li>

      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Cosmetic</a>
      </li>

      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Health</a>
      </li>

      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Watches</a>
      </li>

    </ul>

    <ul class="footer-nav-list">
    
      <li class="footer-nav-item">
        <h2 class="nav-title">Products</h2>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Prices drop</a>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">New products</a>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Best sales</a>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Contact us</a>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Sitemap</a>
      </li>
    
    </ul>

    <ul class="footer-nav-list">
    
      <li class="footer-nav-item">
        <h2 class="nav-title">Our Company</h2>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Delivery</a>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Legal Notice</a>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Terms and conditions</a>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">About us</a>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Secure payment</a>
      </li>
    
    </ul>

    <ul class="footer-nav-list">
    
      <li class="footer-nav-item">
        <h2 class="nav-title">Services</h2>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Prices drop</a>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">New products</a>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Best sales</a>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Contact us</a>
      </li>
    
      <li class="footer-nav-item">
        <a href="#" class="footer-nav-link">Sitemap</a>
      </li>
    
    </ul>

    <ul class="footer-nav-list">

      <li class="footer-nav-item">
        <h2 class="nav-title">Contact</h2>
      </li>

      <li class="footer-nav-item flex">
        <div class="icon-box">
          <ion-icon name="location-outline"></ion-icon>
        </div>

        <address class="content">
          419 State 414 Rte
          Beaver Dams, New York(NY), 14812, USA
        </address>
      </li>

      <li class="footer-nav-item flex">
        <div class="icon-box">
          <ion-icon name="call-outline"></ion-icon>
        </div>

        <a href="tel:+607936-8058" class="footer-nav-link">(607) 936-8058</a>
      </li>

      <li class="footer-nav-item flex">
        <div class="icon-box">
          <ion-icon name="mail-outline"></ion-icon>
        </div>

        <a href="mailto:example@gmail.com" class="footer-nav-link">example@gmail.com</a>
      </li>

    </ul>

    <ul class="footer-nav-list">

      <li class="footer-nav-item">
        <h2 class="nav-title">Follow Us</h2>
      </li>

      <li>
        <ul class="social-link">

          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li class="footer-nav-item">
            <a href="#" class="footer-nav-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

        </ul>
      </li>

    </ul>

  </div>

</div>

<div class="footer-bottom">

  <div class="container">

    <img src="./assets/images/payment.png" alt="payment method" class="payment-img">

    <p class="copyright">
      Copyright &copy; <a href="#">Anon</a> all rights reserved.
    </p>

  </div>

</div>

</footer>
</template>
