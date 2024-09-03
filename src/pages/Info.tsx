import React from 'react';
import './Info.css'; // Importa el archivo CSS

const Info: React.FC = () => {
  return (
    <div>
      <div className="header">
        <h1>Maratón Santo Domingo 2024</h1>
        <p className="highlight">¡Bienvenidos a la maratón más emocionante de Santo Domingo!</p>
      </div>

      <div className="container">
        <h2>Información General</h2>
        <p>
          La Maratón de Santo Domingo es un evento anual que reúne a corredores de todas las edades y niveles para celebrar el espíritu del deporte y la comunidad. Este año, el evento tendrá lugar el <strong>15 de octubre de 2024</strong>, comenzando a las 7:00 AM en el Parque Central de Santo Domingo.
        </p>
        
        <h3>Distancias y Categorías</h3>
        <ul>
          <li><strong>42k</strong> - Maratón completo. Requiere un nivel avanzado de preparación física.</li>
          <li><strong>21k</strong> - Media maratón. Ideal para corredores con experiencia moderada.</li>
          <li><strong>10k</strong> - Carrera corta. Perfecta para principiantes y corredores recreativos.</li>
        </ul>

        <h3>Inscripciones</h3>
        <p>
          Las inscripciones están abiertas hasta el <strong>30 de septiembre de 2024</strong>. ¡Asegúrate de registrar tu participación cuanto antes!
        </p>

        <h3>Beneficios para los Participantes</h3>
        <ul>
          <li>Camiseta oficial del evento</li>
          <li>Medalla conmemorativa al cruzar la meta</li>
          <li>Abastecimiento en puntos de hidratación a lo largo del recorrido</li>
          <li>Servicio de asistencia médica en caso de emergencias</li>
        </ul>

        <h3>Recomendaciones</h3>
        <p>
          Para una experiencia segura y agradable, se recomienda a todos los participantes:
        </p>
        <ul>
          <li>Realizar un chequeo médico previo al evento</li>
          <li>Hidratarse adecuadamente antes, durante y después de la carrera</li>
          <li>Usar ropa y calzado adecuado para correr</li>
          <li>Respetar las indicaciones de los organizadores y el personal de seguridad</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
