import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="alan">
                <h2 className="title">Hakkımızda</h2>
                <div>
                    <p>Airbnb İşleyişi</p>
                    <p>Basın Odası</p>
                    <p>Yatırımcılar</p>
                </div>
            </div>
            <div className="alan">
                <h2 className="title">Topluluk</h2>
                <div>
                    <p>Erişilebilirlik</p>
                    <p>Airbnb dostları</p>
                    <p>Misafir yönetimi</p>
                </div>
            </div>
            <div className="alan">
                <h2 className="title">Ev Sahibi</h2>
                <div>
                    <p>Evinizde ev sahipliği yapin</p>
                    <p>Kaynak Merkezi</p>
                    <p>Airbnb.org</p>
                </div>
            </div>
            <div className="alan">
                <h2 className="title">Destek</h2>
                <div>
                    <p>Covid-19 önlemlerimiz</p>
                    <p>Yardım merkezi</p>
                    <p>Topluluk merkezi</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
