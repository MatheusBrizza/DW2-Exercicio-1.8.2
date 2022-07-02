import "./styles.css";

export default function App() {
  const handleOnSubmit = () => {};

  return (
    <div className="container">
      <div className="conteudo">
        <h1 className="titulo">Tarefas</h1>
        <div>
          <form onSubmit={handleOnSubmit}>
            <div className="tarefa_box">
              <label htmlFor="tarefa">Tarefa</label>
              <div
                style={{
                  display: "flex",
                  gap: 10
                }}
              >
                <input id="tarefa" name="tarefa" placeholder="minha tarefa" />
                <button className="btn btn_adicionar">Adicionar</button>
              </div>
            </div>
          </form>
          <section>
            <ul>
              <li>
                <input className="tarefa_conteudo" value={"conteudo"} />
                <button className="btn btn_excluir">Excluir</button>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
