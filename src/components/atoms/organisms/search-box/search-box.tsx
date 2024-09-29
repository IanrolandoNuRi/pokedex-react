import styles from './search-box.module.css';

interface SearchBoxProps {
    onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Search Pokémon..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBox;
