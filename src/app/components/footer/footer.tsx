import React from 'react';
import { SectionTitle } from '../sectionTitle/section-title';
import './footer.scss';

export function Footer() {
    return (
        <footer className="footer">
            <p>Copyright © 2024 My Website</p>
            <div className="footer-contact">
                <a href='#presentation'>Go Up</a>
            </div>
        </footer>
    );
}
