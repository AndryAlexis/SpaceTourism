// Import crew data and component styles
import { crew as data } from "../../data/crew.data";
import { styles } from './styles/content.styles';
import ContentProps from "./interfaces/content.interface";

/**
 * Content component displays crew member information and navigation
 * @param {ICrew} crew - Current crew member data
 * @param {Function} setCurrentCrew - Function to update selected crew member
 */
const Content = ({ crew, setCurrentCrew }: ContentProps) => {
  // Destructure crew member details
  const { role, name, bio } = crew;

  return (
    <div className={styles.container}>
      {/* Crew member information section */}
      <section className={styles.section}>
        <h2 className={styles.role}>{role}</h2>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.bio}>{bio}</p>
      </section>

      {/* Navigation dots for switching between crew members */}
      <nav className={styles.nav} aria-label="Crew member navigation">
        <ul className={styles.list} role="tablist">
          {data.map((item, index) => (
            <li key={item.name} role="presentation">
              <button
                className={styles.button(item.name === name)}
                onClick={() => setCurrentCrew(index)}
                aria-label={`View ${item.name}'s profile`}
                aria-selected={item.name === name}
                role="tab"
                type="button"
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Content;
