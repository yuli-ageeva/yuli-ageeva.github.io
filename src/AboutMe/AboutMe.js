import './AboutMe.css'
import {Link} from "react-router-dom";
import studentPhoto from '../images/photo.jpg'

function AboutMe() {
    return (
        <section className='about-me'>
            <div className='about-me__info'>
                <div className='about-me__description'>
                    <h3 className='about-me__description-title'>Агеева Юлия
                    </h3>
                    <p className='about-me__description-job'>Фронтенд-разработчик, 25 лет</p>
                    <div className='about-me__description-info'>
                        <p> Я начинающий frontend-разработчик, закончивший годовой курс по web-разработке в
                            Яндекс.Практикуме.
                            За последний год я изучила основные современные web-технологии и овладела навыками
                            разработки web-приложений.</p>
                        <p>Моя цель - создавать интерактивные и интуитивно понятные веб-интерфейсы, которые улучшают
                            пользовательский опыт.
                            Я целеустремленна и готова к трудной работе, чтобы достичь этой цели и добиться успеха. </p>
                        <p>
                            Кроме того, я обладаю хорошим аналитическим складом ума и умением решать сложные задачи. Для
                            меня важно работать в команде, где я смогу обмениваться идеями и опытом.
                        </p>
                    </div>
                    <Link className='about-me__description-link' to="https://github.com/yuli-ageeva"
                          target='_blank'>Github</Link>
                    <Link className='about-me__description-link' to="https://t.me/yuli_ageeva"
                          target='_blank'>Telegram</Link>
                </div>
                <div className='about-me__container-foto'>
                    <img className='about-me__container-photo-photo' src={studentPhoto} alt='фотография'></img>
                </div>
            </div>
        </section>

    )
}

export default AboutMe