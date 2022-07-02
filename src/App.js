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
                <button className="btn_adicionar">Adicionar</button>
              </div>
            </div>
          </form>
          <section>ul>li*4</section>
        </div>
      </div>
    </div>
  );
}
