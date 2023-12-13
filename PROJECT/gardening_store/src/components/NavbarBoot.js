import React from 'react'

const NavbarBoot = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">AboutUs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Best Selling</a>
                            </li>
                            <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Seeds</a></li>
                                    <li><a class="dropdown-item" href="#">Soil & Fertilizer</a></li>
                                    <li><a class="dropdown-item" href="#">Pots</a></li>
                                    <li><a class="dropdown-item" href="#">Pots</a></li>
                                </ul>
                            </div>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Feedback</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarBoot