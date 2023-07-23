import { connect } from "react-redux";
import { mapStateToProps } from "../redux/estado-aplicacion";
import { mapDispatchToProps } from "../redux/mapDispatchToProps";
import Libro from "./Libro";
import { Book } from "../interfaces/interfaces";
import { cuentaLibros } from "../utils/helper.functions";

const Favoritos = (props: any) => {
  //console.log(props);
  const favoritos: Book[] = props.libreria.favoritos;
  let contador:number = 0;

  if (!favoritos) return;

  const renderBooks = favoritos.map((libro: Book) => {
    contador++
    return (
      <li className="libro" key={libro.ISBN}>
        <Libro libro={libro} />
      </li>
    );
  });

  return (
    <>
      <ul className="listaLibros favoritos">
        <h2>Favoritos</h2>
        {cuentaLibros(contador)}
        {favoritos.length ? renderBooks : <p>No hay favoritos</p>}
      </ul>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favoritos);