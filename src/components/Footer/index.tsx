
import "./styles.scss";

export function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_left">
          <p><b>Developer.</b></p>
           Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
        </div>
        <div className="footer_right">
          <table>
            <tr>
              <th>Menu</th> {/*Menu colocado só para preencher espaço por enquanto, visto que o menu de cima acompanha a página!*/}
              <th>Sobre</th>
              <th>Mais</th>
            </tr>
            <tr>
              <td>
                Inicial
              </td>
              <td>

              </td>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                Quem somos ?
              </td>
              <td>

              </td>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                Desenvolvedores
              </td>
              <td>

              </td>
              <td>

              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
