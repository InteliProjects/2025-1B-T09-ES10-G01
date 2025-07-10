# 2025-1B-T09-ES10-G01

# Sumário

- [Projeto de Fluxo Contínuo CI/CD - TimeNow](#projeto-de-fluxo-contínuo-cicd---timenow)
- [Objetivo do Projeto](#objetivo-do-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias e Ferramentas](#tecnologias-e-ferramentas)
- [👨‍💻 Time de Desenvolvimento](#-time-de-desenvolvimento)
- [👨‍🏫 Professores e Orientadores](#-professores-e-orientadores)
- [Instruções para Execução do Projeto](#instruções-para-execução-do-projeto)
- [📝 Licença](#-licença)

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

---

## 👨‍💻 Time de Desenvolvimento

| Nome                      | LinkedIn |
|---------------------------|----------|
| Davi Ferreira Arantes     | [Perfil](https://www.linkedin.com/in/davi-ferreira-arantes/) |
| Eduarda Cardoso de Souza  | [Perfil](https://www.linkedin.com/in/eduarda-souza-8bb802268/) |
| Gabrielly Silva Vitor     | [Perfil](https://www.linkedin.com/in/gabriellysilvavitor/) |
| João Pedro Sotto Maior    | [Perfil](http://www.linkedin.com/in/joão-pedro-sotto-maior) |
| Luigi Otávio Neves Macedo | [Perfil](https://www.linkedin.com/in/luigiotavio/) |
| Paula Zanella Piva        | [Perfil](https://www.linkedin.com/in/paulapiva03/) |

---

## 👨‍🏫 Professores e Orientadores

| Nome              | Função                   | LinkedIn |
|-------------------|--------------------------|----------|
| Reginaldo Arakaki | Orientador               | [Perfil](https://www.linkedin.com/in/reginaldo-arakaki-9574222b/) |
| Filipe Gonçalves  | Professor de Liderança   | [Perfil](https://www.linkedin.com/in/filipe-gon%C3%A7alves-08a55015b/) |
| Lisane Valdo      | Professora de Negócios   | [Perfil](https://www.linkedin.com/in/lisane-valdo/) |
| Ovídio Netto      | Professor de Programação | [Perfil](https://www.linkedin.com/in/ovidio-netto/) |
| José Romualdo     | Professor de Programação | [Perfil](https://www.linkedin.com/in/jose-romualdo/) |
| Fernando Pizzo    | Professor de Matemática  | [Perfil](https://www.linkedin.com/in/fernando-pizzo-208b526a/) |

---

## Instruções para Execução do Projeto

Para executar o projeto, siga as orientações descritas nas seções a seguir da documentação:

- 🔧 [6. Configuração Esteira de CI](https://github.com/InteliProjects/2025-1B-T09-ES10-G01/blob/main/docs/docs.md#6-configura%C3%A7%C3%A3o-esteira-de-ci)
- 🚀 [7. Configuração da Esteira CD](https://github.com/InteliProjects/2025-1B-T09-ES10-G01/blob/main/docs/docs.md#7-configura%C3%A7%C3%A3o-da-esteira-cd)

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
