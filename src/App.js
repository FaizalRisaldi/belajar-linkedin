import "./App.css";
import { FaBook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaGoogle, FaMicrosoft, FaAmazon, FaApple } from "react-icons/fa";

function App() {
  return (
    <>
      {/* Header */}
      <header>
        <nav className="container">
          <div className="logo">
            <FaBook style={{ marginRight: "8px", color: "#6366f1" }} />
          BelajarLinkedin</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#kelas">Kelas</a></li>
            <li><a href="#benefit">Benefit</a></li>
            <li><a href="#testimoni">Testimoni</a></li>
          </ul>
          <a href="#signup" className="btn-primary">Sign Up</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Belajar LinkedIn: Optimalkan Profil & Karier Anda.</h1>
              <p>
                Pelajari cara membangun profil LinkedIn profesional, memperluas jaringan, 
                dan meningkatkan peluang karier melalui strategi yang terbukti efektif.
              </p>
              <a href="#courses" className="btn-primary">Daftar Sekarang</a>
            </div>
            <div className="hero-image">
              <img
                src="/students.png"
                alt="Student"
              />
              <div className="floating-card card-1">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{
                    width: "30px",
                    height: "30px",
                    background: "#6366f1",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white"
                  }}><FaUser size={16} /></div>
                  <div>
                    <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>Our Teachers</div>
                    <div style={{ fontSize: "0.7rem", color: "#666" }}>+5k</div>
                  </div>
                </div>
              </div>
              <div class="floating-card card-2">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{
                    width: "30px",
                    height: "30px",
                    background: "#6366f1",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white"
                  }}><FaStar size={16} color="gold" /></div>
                    <div>
                      <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>Rating</div>
                    <div style={{ fontSize: "0.7rem", color: "#666" }}>4.9/5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="trust">
        <div class="container">
            <div class="trust-content">
                <div class="trust-text">Trusted by 600+ Companies</div>
                <div class="trust-logos">
                  <FaGoogle size={32} color="#DB4437" />
                  <FaMicrosoft size={32} color="#00A4EF" />
                  <FaAmazon size={32} color="#FF9900" />
                  <FaApple size={32} color="#333" />
                </div>
            </div>
        </div>
    </section>

    {/* About Section */}
    <section className="about" id="about">
      <div className="container">
        <h2>Tentang BelajarLinkedIn</h2>
        <p>
          BelajarLinkedIn adalah platform edukasi yang dirancang untuk membantu
          Anda membangun profil profesional di LinkedIn, memperluas jaringan,
          dan meningkatkan peluang karier. Melalui materi yang praktis dan
          mudah dipahami, peserta akan belajar strategi membangun profil yang
          menonjol, menulis konten yang menarik, serta memanfaatkan fitur
          LinkedIn secara optimal. Kelas ini cocok untuk pemula maupun yang
          ingin mengembangkan kemampuan profesionalnya lebih lanjut.
        </p>
      </div>
    </section>

    <section class="courses" id="kelas">
        <div class="container">
            <div class="section-header">
                <h2>Pilih Kelas Untuk Memulai</h2>
                <p>lihat semua kelas →</p>
            </div>
            <div class="course-grid">
                <div className="course-card">
                  <img className="course-image" src="https://placehold.co/120x120" style={{ width: "100%", height: "200px", objectFit: "cover" }}/>
                  <div className="course-content">
                    <h3>Ini contoh judul kelas belajar linkedin</h3>
                    <div className="course-meta">
                      <span className="course-price">$89.99</span>
                      <div className="course-rating">
                        <span>⭐ 4.9</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="course-card">
                  <img className="course-image" src="https://placehold.co/120x120" style={{ width: "100%", height: "200px", objectFit: "cover" }}/>

                  <div className="course-content">
                    <h3>Ini contoh judul kelas belajar linkedin</h3>
                    <div className="course-meta">
                      <span className="course-price">$79.99</span>
                      <div className="course-rating">
                        <span>⭐ 4.8</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="course-card">
                  <img className="course-image" src="https://placehold.co/120x120" style={{ width: "100%", height: "200px", objectFit: "cover" }}/>

                  <div className="course-content">
                    <h3>Ini contoh judul kelas belajar linkedin</h3>
                    <div className="course-meta">
                      <span className="course-price">$99.99</span>
                      <div className="course-rating">
                        <span>⭐ 4.9</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="course-card">
                  <img className="course-image" src="https://placehold.co/120x120" style={{ width: "100%", height: "200px", objectFit: "cover" }}/>
                  <div className="course-content">
                    <h3>Ini contoh judul kelas belajar linkedin</h3>
                    <div className="course-meta">
                      <span className="course-price">$69.99</span>
                      <div className="course-rating">
                        <span>⭐ 4.7</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-card">
                  <img className="course-image" src="https://placehold.co/120x120" style={{ width: "100%", height: "200px", objectFit: "cover" }}/>
                  <div className="course-content">
                    <h3>Ini contoh judul kelas belajar linkedin</h3>
                    <div className="course-meta">
                      <span className="course-price">$69.99</span>
                      <div className="course-rating">
                        <span>⭐ 4.7</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-card">
                  <img className="course-image" src="https://placehold.co/120x120" style={{ width: "100%", height: "200px", objectFit: "cover" }}/>
                  <div className="course-content">
                    <h3>Ini contoh judul kelas belajar linkedin</h3>
                    <div className="course-meta">
                      <span className="course-price">$69.99</span>
                      <div className="course-rating">
                        <span>⭐ 4.7</span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>

    <section class="how-it-works" id="benefit">
        <div class="container">
            <div class="section-header">
                <h2>Manfaat Utama Mengikuti Kelas</h2>
            </div>
            <div class="steps">
                <div class="step">
                    <div class="step-number">01</div>
                    <h3>Profil Profesional</h3>
                    <p>Buat profil LinkedIn yang menonjol dan menarik perhatian recruiter.</p>
                </div>
                <div class="step">
                    <div class="step-number">02</div>
                    <h3>Strategi Networking</h3>
                    <p>Pelajari cara membangun jaringan profesional yang efektif dan relevan.</p>
                </div>
                <div class="step">
                    <div class="step-number">03</div>
                    <h3>Peluang Karier</h3>
                    <p>Tingkatkan kesempatan mendapat pekerjaan atau proyek melalui LinkedIn.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="testimonials" id="testimoni">
      <div className="container">
        <div className="section-header">
          <h2>Testimoni Alumni</h2>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="testimonial-avatar">ER</div>
            <h4>Andi Saputra</h4>
            <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
              Alumni
            </p>
            <p style={{ marginTop: "1rem" }}>
              "BelajarLinkedIn benar-benar membantu saya memahami cara membangun profil
              profesional yang menarik. Setelah mengikuti kelas ini, jaringan saya berkembang
              pesat dan peluang kerja baru pun terbuka."
            </p>
            <div style={{ marginTop: "1rem" }}>⭐⭐⭐⭐⭐ 5.0</div>
          </div>

          <div className="testimonial-card">
            <div
              className="testimonial-avatar"
              style={{
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
              }}
            >
              MT
            </div>
            <h4>Rina Wijaya</h4>
            <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
              Alumni
            </p>
            <p style={{ marginTop: "1rem" }}>
             "Materi yang disampaikan jelas dan praktis. Saya sekarang lebih percaya diri
              dalam memanfaatkan LinkedIn untuk mengembangkan karier saya."."
            </p>
            <div style={{ marginTop: "1rem" }}>⭐⭐⭐⭐⭐ 5.0</div>
          </div>
        </div>
      </div>
    </section>
    {/* Call-to-Action Section */}
    <section className="cta">
      <div className="container">
        <h2>Siap Meningkatkan Profil LinkedIn Anda?</h2>
        <p>Daftar sekarang dan mulai optimalkan karier profesional Anda!</p>
        <a href="#signup" className="btn-primary">Daftar Sekarang</a>
      </div>
    </section>

    <section className="newsletter">
      <div className="container">
        <h2>Subscribe Newsletter</h2>
        <p>Get the latest updates about new courses and special offers</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>

    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>          
            <FaBook style={{ marginRight: "8px", color: "#ffffffff" }} />
          BelajarLinkedin</h3>
            <p>
              © 2025 Platform edukasi yang dirancang untuk membantu Anda membangun profil profesional di LinkedIn, memperluas jaringan, dan meningkatkan peluang karier.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffffff" }}>
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffffff" }}>
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffffff" }}>
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Product</h3>
            <ul>
              <li><a href="#">Landingpage</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Referral Program</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Themes</a></li>
              <li><a href="#">Illustrations</a></li>
              <li><a href="#">UI Kit</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 BelajarLinkedIn. All rights reserved.</p>
        </div>
      </div>
    </footer>

    </>
  );
}

export default App;
