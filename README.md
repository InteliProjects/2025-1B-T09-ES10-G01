# 2025-1B-T09-ES10-G01

# Sumário

- [1. Introdução](#1-introdução)
  - [1.1 Objetivo do Documento](#11-objetivo-do-documento)

- [2. Contextualização do Projeto](#2-contextualização-do-projeto)
  - [2.1 Apresentação Geral](#21-apresentação-geral)
  - [2.2 Parceiros envolvidos](#22-parceiros-envolvidos)

- [3. Estrutura do Projeto](#3-estrutura-do-projeto)
  - [3.1 Esteira CI/CD](#31-esteira-cicd)
  - [3.2 Design System e Segurança](#32-design-system-e-segurança)
  - [3.3 Estratégia de Testes](#33-estratégia-de-testes)
  - [3.4 Métricas e Observabilidade](#34-métricas-e-observabilidade)
  - [3.5 Boas Práticas e Aprendizados](#35-boas-práticas-e-aprendizados)

- [4. Tecnologias e Ferramentas Utilizadas](#4-tecnologias-e-ferramentas-utilizadas)

- [5. Equipe de Desenvolvimento](#5-equipe-de-desenvolvimento)
  - [5.1 Estudantes](#51-estudantes)
  - [5.2 Professores e Orientadores](#52-professores-e-orientadores)

- [6. Licença](#6-licença)

# Projeto de Fluxo Contínuo CI/CD - TimeNow

Este repositório documenta o desenvolvimento de uma esteira de **Integração e Entrega Contínua (CI/CD)** com foco em automação, segurança, testes e governança de software, aplicada com base na **Plataforma Kyno** da empresa [TimeNow](https://timenow.com.br/). Desenvolvido por estudantes do [Inteli](https://inteli.edu.br/) em parceria com a TimeNow, o projeto busca entregar uma solução robusta, escalável e alinhada às boas práticas de DevOps, utilizando ferramentas como Azure DevOps, GitHub, Husky, OWASP ZAP e metodologias ágeis.

---

## Objetivo do Projeto

Criar uma esteira CI/CD inteligente que:

- Automatize o fluxo de build, teste e deploy da plataforma Kino.
- Garanta segurança de código desde o primeiro commit.
- Promova observabilidade e rastreabilidade completa das entregas.
- Incorpore métricas de qualidade (como as DORA Metrics).
- Reduza o retrabalho e facilite o onboarding de novos times.
- Sirva como modelo reusável para outras aplicações da TimeNow.

---

## Estrutura do Projeto

O projeto foi desenvolvido utilizando uma infraestrutura moderna e integrada, com destaque para o uso da plataforma **Azure DevOps** como principal ambiente de versionamento, integração e entrega contínua, além do gerenciamento ágil das tarefas de desenvolvimento.  Essa estrutura promoveu transparência entre as equipes, integração contínua com segurança e agilidade, além de possibilitar testes, logs e reexecuções com histórico versionado para auditoria e aprendizado contínuo.

- Estrutura da esteira (pipelines, versionamento, rollback)
- Design system com regras de segurança e padronização
- Estratégia de testes (unitários, DR, segurança)
- Métricas e dashboards de observabilidade
- Boas práticas e aprendizados

As **pipelines CI/CD** foram configuradas no Azure DevOps e organizadas por repositório (`repo` sendo a principal, `kyno-backend` e `kyno-frontend` para fins informativos), permitindo automação desde o commit até o deploy, com monitoramento e rastreabilidade das execuções. O ambiente está acessível por meio do seguinte link, com permissões concedidas aos membros da **TimeNow** e do **Inteli**: [Pipelines no Azure DevOps – TimeNow & Inteli](https://dev.azure.com/TimenowDigital/Inteli%20e%20Timenow%20TAP10%20-%20G1/_build)


---

## Tecnologias e Ferramentas

| Categoria             | Ferramenta                      |
|----------------------|----------------------------------|
| CI/CD                | Azure DevOps, GitHub Actions     |
| Versionamento        | Git, GitHub, Azure DevOps |
| Segurança            | OWASP ZAP, GitGuardian, Husky    |
| Testes               | Jest, Pytest, Azure Test Plans   |
| Métricas & Monitoramento | Prometheus, Grafana, Locust           |
| Organização e Planejamento | Trello                      |


### 👨‍💻 Time de Desenvolvimento

| Nome                      | LinkedIn |
|---------------------------|----------|
| Davi Ferreira Arantes     | [Perfil](https://www.linkedin.com/in/davi-ferreira-arantes/) |
| Eduarda Cardoso de Souza  | [Perfil](https://www.linkedin.com/in/eduarda-souza-8bb802268/) |
| Gabrielly Silva Vitor     | [Perfil](https://www.linkedin.com/in/gabriellysilvavitor/) |
| João Pedro Sotto Maior    | [Perfil](http://www.linkedin.com/in/joão-pedro-sotto-maior) |
| Luigi Otávio Neves Macedo | [Perfil](https://www.linkedin.com/in/luigiotavio/) |
| Paula Zanella Piva        | [Perfil](https://www.linkedin.com/in/paulapiva03/) |

</td>
<td>

### 👨‍🏫 Professores e Orientadores

| Nome              | Função                   | LinkedIn |
|-------------------|--------------------------|----------|
| Reginaldo Arakaki | Orientador               | [Perfil](https://www.linkedin.com/in/reginaldo-arakaki-9574222b/) |
| Filipe Gonçalves  | Professor de Liderança   | [Perfil](https://www.linkedin.com/in/filipe-gon%C3%A7alves-08a55015b/) |
| Lisane Valdo      | Professora de Negócios   | [Perfil](https://www.linkedin.com/in/lisane-valdo/) |
| Ovídio Netto      | Professor de Programação | [Perfil](https://www.linkedin.com/in/ovidio-netto/) |
| José Romualdo     | Professor de Programação | [Perfil](https://www.linkedin.com/in/jose-romualdo/) |
| Fernando Pizzo    | Professor de Matemática  | [Perfil](https://www.linkedin.com/in/fernando-pizzo-208b526a/) |

</td>
</tr>
</table>

---

A documentação não inclui links diretos para os arquivos dentro da pasta `docs/`, como por exemplo:

🔗 [docs/docs.md](https://github.com/Inteli-College/2025-1B-T09-ES10-G01/blob/main/docs/docs.md)  
🔗 [docs/reportexecutivo.md](https://github.com/Inteli-College/2025-1B-T09-ES10-G01/blob/main/docs/reportexecutivo.md)

Esses links ajudariam o leitor a acessar conteúdos mais detalhados sobre o projeto.
---

## 📝 Licença

Este projeto foi desenvolvido pelos estudantes exclusivamente para fins educacionais e de inovação no contexto da parceria entre o Inteli e a TimeNow. O conteúdo pode ser reutilizado internamente pela TimeNow com fins estratégicos e operacionais.

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
  <a property="dct:title" rel="cc:attributionURL" href="https://github.com/Inteli-College/2025-1B-T09-ES10-G01">
    Projeto de Fluxo Contínuo CI/CD - TimeNow
  </a> by 
  <a href="https://github.com/Intelihub" target="_blank">Inteli</a>,
  <a href="https://www.linkedin.com/in/davi-ferreira-arantes/" target="_blank">Davi Ferreira Arantes</a>,
  <a href="https://www.linkedin.com/in/eduarda-souza-8bb802268/" target="_blank">Eduarda Cardoso de Souza</a>,
  <a href="https://www.linkedin.com/in/gabriellysilvavitor/" target="_blank">Gabrielly Silva Vitor</a>,
  <a href="http://www.linkedin.com/in/joão-pedro-sotto-maior" target="_blank">João Pedro Sotto Maior</a>,
  <a href="https://www.linkedin.com/in/luigiotavio/" target="_blank">Luigi Otávio Neves Macedo</a>,
  <a href="https://www.linkedin.com/in/paulapiva03/" target="_blank">Paula Zanella Piva</a>,
  is licensed under 
  <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" 
     target="_blank" 
     rel="license noopener noreferrer" 
     style="display:inline-block;">
    Creative Commons Attribution 4.0 International
    <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" 
         src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="">
    <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" 
         src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="">
  </a>
</p>

