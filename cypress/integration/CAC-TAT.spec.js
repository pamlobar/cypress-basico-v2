/// <reference types="Cypress" />
///const faker = require ('faker')
import { faker } from "@faker-js/faker";

describe('Central de Atendimento ao Cliente TAT', function() {
    ///Para visitar a url a cada caso de teste
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    // Declaração de variaveis
    var varName = faker.internet.displayName()
    var varLastName = faker.internet.displayName()
    var varEmail = faker.internet.email()
    var varText = faker.commerce.productDescription()
    ///Verificar título da tela
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    ///Verificar se todos os capos previstos estão visiveis
    it('validar visibilidade de todos os campos da tela', function(){
        cy.contains('CAC TAT').should('be.visible')
        cy.contains('Forneça o máximo de informações, por favor.').should('be.visible')
        cy.contains('Nome').should('be.visible')
        cy.contains('Sobrenome').should('be.visible')
        cy.contains('E-mail').should('be.visible')
        cy.contains('Telefone').should('be.visible')
        cy.contains('Produto').should('be.visible')
        cy.contains('Tipo de atendimento').should('be.visible')
        cy.contains('Ajuda').should('be.visible')
        cy.contains('Elogio').should('be.visible')
        cy.contains('Feedback').should('be.visible')
        cy.contains('Qual seu meio de contato preferencial').should('be.visible')
        cy.contains('Como podemos te ajudar?').should('be.visible')
        cy.contains('Adicione um anexo').should('be.visible')
        cy.contains('Política de Privacidade').should('be.visible')
    })
    ///Envio de formulário
    it('preenche os campos obrigatórios e envia o formulário', function(){
        cy.enviar(varName, varLastName, varEmail, varText)
        cy.get('.success').should('be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nenhum campo preenchido
    it('valida campos obrigatórios, sem preenchimento de nenhum campo', function(){
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    ///Verificar obrigatoriedade dos campos, apenas nome preenchido
    it('valida campos obrigatórios, apenas nome', function(){
        cy.get('#firstName').type(varName)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nome e sobrenome preenchido
    it('valida campos obrigatórios, apenas nome e sobrenome', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nome, sobrenome e email preenchido
    it('valida campos obrigatórios, apenas nome, sobrenome e email', function(){
        cy.get('button[type="submit"]').click()
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type(varEmail)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nome, sobrenome e email preenchido porém invalido 1
    it('valida campos obrigatórios, apenas nome, sobrenome e email, porém email inválido 1', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type('email')
        cy.get('#open-text-area').type(varText)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nome, sobrenome e email preenchido porém invalido 2
    it('valida campos obrigatórios, apenas nome, sobrenome e email, porém email inválido 2', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type('email@')
        cy.get('#open-text-area').type(varText)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nome, sobrenome e email preenchido porém invalido 3
    it('valida campos obrigatórios, apenas nome, sobrenome e email, porém email inválido 3', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type('email@email')
        cy.get('#open-text-area').type(varText)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nome, sobrenome e email preenchido porém invalido 4
    it('valida campos obrigatórios, apenas nome, sobrenome e email, porém email inválido 4', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type('email@email.')
        cy.get('#open-text-area').type(varText)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nome, sobrenome e email preenchido porém invalido 5
    it('valida campos obrigatórios, apenas nome, sobrenome e email, porém email inválido 5', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type('email@email.email')
        cy.get('#open-text-area').type(varText)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
  })

