import './Portfolio.css';
import {Link} from "react-router-dom";

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__links'>
        <li className='portfolio__link'>
          <Link className='portfolio__link-name' to='https://yuli-ageeva.github.io/how-to-learn' target="_blank">Статичный
            сайт
          </Link>
        </li>
        <li className='portfolio__link'>
          <Link className='portfolio__link-name' to='https://yuli-ageeva.github.io/russian-travel' target="_blank">Адаптивный
            сайт
          </Link>
        </li>
        <li className='portfolio__link'>
          <Link className='portfolio__link-name' to='https://yuliaageeva.nomoredomains.xyz'
                target="_blank">Одностраничное
            приложение
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio