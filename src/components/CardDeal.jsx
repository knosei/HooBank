import {card} from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> 
        in few easy steps.</h2>
        <p>Arcu tortor, purus in mattis sed integer faucibus. Aliquet 
        quis aliquet eget mauris tortor. c Aliquet ultrices ac, ametau.</p>
      </div>
    </section>
)

export default CardDeal