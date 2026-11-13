function MovieCard({ title, year, rating, available, popular, genre, duration }) {
  return (
    <article className="movie-card">
      <h2>{title}</h2>
      <p>שנת יציאה: {year}</p>
      <p>דירוג: {rating}</p>
      <p>ז׳אנר: {genre}</p>
      {available &&<p>זמין לצפייה</p>}
      {popular &&<p>בחירת הצוות</p>}
      {typeof duration === "number" && <p>משך הסרט: {duration} דקות</p>}  
                                        
      
      
    </article>
  );
}

export default MovieCard;
