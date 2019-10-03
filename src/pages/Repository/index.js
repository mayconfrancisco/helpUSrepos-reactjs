import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssueList, Pagination } from './styles';

class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
    typeIssueSelected: 'open',
    issuesPage: 1,
  };

  componentDidMount() {
    this.getIssues();
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.typeIssueSelected !== this.typeIssueSelected ||
      prevState.issuesPage !== this.issuesPage
    ) {
      this.getIssues();
    }
  }

  async getIssues() {
    const { match } = this.props;
    const { typeIssueSelected, issuesPage } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: typeIssueSelected,
          per_page: 10,
          page: issuesPage,
        },
      }),
    ]);

    this.setState({
      loading: false,
      repository: repository.data,
      issues: issues.data,
    });
  }

  handleTypeIssue = e => {
    this.setState({ typeIssueSelected: e.target.value });
  };

  render() {
    const {
      repository,
      issues,
      loading,
      typeIssueSelected,
      issuesPage,
    } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          <div>
            <span>
              Filtrar <i>issues</i> por:
            </span>
            <select onChange={this.handleTypeIssue} value={typeIssueSelected}>
              <option value="all">Todas</option>
              <option value="open">Abertas</option>
              <option value="closed">Fechadas</option>
            </select>
          </div>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
        <Pagination>
          <button
            type="button"
            disabled={issuesPage === 1}
            onClick={() => this.setState({ issuesPage: issuesPage - 1 })}
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={() => this.setState({ issuesPage: issuesPage + 1 })}
          >
            Próximo
          </button>
        </Pagination>
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};

export default Repository;
