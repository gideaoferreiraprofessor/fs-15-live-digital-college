import { Outlet, NavLink } from "react-router"
import BF2026 from "../../assets/images/banners/bf-2026.png"
import fBBf2026 from "../../assets/images/banners/black_friday_facebook_banner_26.png"

function AppLayout() {
    return (
        <>
            <header className="container">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <NavLink className="nav-link active"to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/products">Produtos</NavLink>
                    </li>
                </ul>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-current="true" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={BF2026} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item active">
                            <img src={fBBf2026} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </header>
            <main className="container mt-5 mb-5">
                <Outlet />
            </main>
            <footer className="bg-warning text-center">
                &copy; SportCabraDaPeste - sportcabradapeste.com.br - 2026
            </footer>
        </>
    )
}

export default AppLayout