
<footer>
    <div class="info">
        <div class="container">
            <div class="footer-left">
                <div class="footer-menu">
                    <div class="footer-menu-column">
                        <h6 class="title t-6">Aquamar <img class="dd-arrow" src="<?php echo get_template_directory_uri(); ?>/dist/images/drop-down.png" alt=""></h6>
                        <ul>
                            <li><a href="/contact/">Contact </a></li>
                            <li><a href="/despre-noi/">Despre noi</a></li>
                            <li><a href="/blog/">Blog</a></li>
                            <li><a href="/product-category/piscine/">Toate produsele</a></li>
                        </ul>
                    </div>
                    <div class="footer-menu-column">
                        <h6 class="title t-6">Informații clienți <img class="dd-arrow" src="<?php echo get_template_directory_uri(); ?>/dist/images/drop-down.png" alt=""></i></h6>
                        <ul>
                            <li><a href="/livrare-comenzi/">Livrare comenzi</a></li>
                            <li><a href="/retur-produse/">Retur produse</a></li>
                            <li><a href="/modalitati-de-plata/">Modalități de plată</a></li>
                        </ul>
                    </div>
                    <div class="footer-menu-column">
                        <h6 class="title t-6">Informații legale <img class="dd-arrow" src="<?php echo get_template_directory_uri(); ?>/dist/images/drop-down.png" alt=""></i></h6>
                        <ul>
                            <li><a href="/termeni-si-conditii/">Termeni și condiții</a></li>
                            <li><a href="/politica-cookies/">Politica cookies</a></li>
                            <li><a href="https://anpc.ro/">A.N.P.C.</a></li>
                            <li><a href="/protectia-datelor/">Protecția datelor</a></li>
                        </ul>
                    </div>
                    <div class="footer-menu-column">
                        <h6 class="title t-6">Contact <img class="dd-arrow" src="<?php echo get_template_directory_uri(); ?>/dist/images/drop-down.png" alt=""></h6>
                        <ul>
                            <li><a href="tel:0755555555">Tel: 0755 555 555</a></li>
                            <li><a href="mailto:office@aquamar.ro">Email: office@aquamar.ro</a></li>
                            <li><p>Adresă: Parc Industrial UTA, <br> Hala 45, Arad, Romania</p></li>
                            <li><a href="#">Vezi pe hartă</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-right">
                <div class="newsletter-container">
                    <h6 class="title t-6">Abonare Newsletter</h6>
                    <p class="small">Fii la curent cu ultimele noastre noutăți.</p>
                    <form action="#" class="newsletter-form">
                        <input type="email" name="" id="newsletter-input" placeholder="Adresa de email">
                        <input type="submit" class="newsletter-signup-form__button" value="Abonează-te">
                    </form>
                </div>
                <div class="newsletter__form">
					<div class="newsletter-popup">
						<div class="newsletter-overlay"></div>
						<?php echo do_shortcode('[contact-form-7 id="2616" title="Newsletter"]') ?>
					</div>
				</div>
            </div>
        </div>
    </div>
    <div class="credits">
        <div class="container ">
            <div class="right">
                <p>&copy; 2020 Aquamar Solutions. Toate drepturile rezervate.</p>
            </div>
            <div class="left">
                <a href="https://webefficient.ro">
                    Creat de <img src="<?php echo get_template_directory_uri(); ?>/dist/images/webeff.svg" alt="site creeat de web efficient"> Web Efficient
                </a>    
            </div>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>