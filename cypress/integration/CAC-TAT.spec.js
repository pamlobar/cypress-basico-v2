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
    const varLongText = "Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA "
    
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
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
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
    ///Validar textos longos no campo de assunto
    it('Validar textos bem longos no campo de descrição da ajuda', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type(varEmail)
        cy.get('#open-text-area').type(varLongText, { delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
    ///Validar se campo telefone é apenas numerico
    it('Validar se campo destinado ao telefone aceita somente números, não aceita letras', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type(varEmail)
        cy.get('#phone').type('tel39fone').should('have.value', '')
        cy.get('#open-text-area').type(varLongText, { delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
     ///Validar se campo telefone é apenas numerico, não aceita especiais
     it('Validar se campo destinado ao telefone aceita somente números, não aceira numeros ou  especiais', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type(varEmail)
        cy.get('#phone').type('47-96584444').should('have.value', '47')
        cy.get('#open-text-area').type(varLongText, { delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
    ///Validar se campo telefone é numerico
    it('Validar se campo destinado ao telefone aceita números', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type(varEmail)
        cy.get('#phone').type('4796584444').should('have.value', '4796584444')
        cy.get('#open-text-area').type(varLongText, { delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
    ///Forçar campo de telefone como obrigatorio e enviar formulario
    it('Forçar campo de telefone como obrigatorio e enviar formulario com sucesso', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type(varEmail)
        cy.get('#phone-checkbox').check()
        cy.get('#phone').type('4796584444').should('have.value', '4796584444')
        cy.get('#open-text-area').type(varLongText, { delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
    ///Forçar campo de telefone como obrigatorio e não enviar formulario
    it('Forçar campo de telefone como obrigatorio e não preencher o campo de telefone', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type(varEmail)
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type(varLongText, { delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    ///Validar conteudo da mensagem de campos obrigatorios
    it('Validar se campo destinado ao telefone aceita números', function(){
        cy.get('#firstName')
            .type(varName)
            .should('have.value', varName)
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type(varLastName)
            .should('have.value', varLastName)
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type(varEmail)
            .should('have.value', varEmail)
            .clear()
            .should('have.value', '')
        cy.get('#phone')
            .type('4796584444')
            .should('have.value', '4796584444')
            .clear()
            .should('have.value', '')
        cy.get('#open-text-area')
            .type(varText, { delay: 0})
            .should('have.value', varText)
            .clear()
            .should('have.value', '')
        cy.contains('button', 'Enviar').click()
        cy.contains('.error', 'Valide os campos obrigatórios').should('be.visible')
    })
    ///Selecionar produto youtube
    it('Selecionar produto youtube e verificar se foi selcionado corretamente', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type(varEmail)
        cy.get('#phone-checkbox').check()
        cy.get('#phone').type('4796584444').should('have.value', '4796584444')
        cy.get('#open-text-area').type(varLongText, { delay: 0})
        cy.get('#product')
            .select('youtube')
            .should('have.value', 'youtube')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
        ///Selecionar produto mentoria
        it('Selecionar produto mentoria e verificar se foi selcionado corretamente', function(){
            cy.get('#firstName').type(varName)
            cy.get('#lastName').type(varLastName)
            cy.get('#email').type(varEmail)
            cy.get('#phone-checkbox').check()
            cy.get('#phone').type('4796584444').should('have.value', '4796584444')
            cy.get('#open-text-area').type(varLongText, { delay: 0})
            cy.get('#product')
                .select('mentoria')
                .should('have.value', 'mentoria')
            cy.get('button[type="submit"]').click()
            cy.get('.success').should('be.visible')
        })
        ///Selecionar produto blog
        it('Selecionar produto blog e verificar se foi selcionado corretamente', function(){
            cy.get('#firstName').type(varName)
            cy.get('#lastName').type(varLastName)
            cy.get('#email').type(varEmail)
            cy.get('#phone-checkbox').check()
            cy.get('#phone').type('4796584444').should('have.value', '4796584444')
            cy.get('#open-text-area').type(varLongText, { delay: 0})
            cy.get('#product')
                .select(1)
                .should('have.value', 'blog')
            cy.get('button[type="submit"]').click()
            cy.get('.success').should('be.visible')
        })
    ///Selecionar tipo de atendimento
    it('Selecionar tipo de atendimento atraves de radiobox', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type(varEmail)
        cy.get('#phone-checkbox').check()
        cy.get('#phone').type('4796584444').should('have.value', '4796584444')
        cy.get('#open-text-area').type(varLongText, { delay: 0})
        cy.get('#product')
            .select('youtube')
            .should('have.value', 'youtube')
        cy.get('input[type="radio"][value="elogio"]')
            .check()
            .should('have.value', 'elogio')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
    ///Selecionar tipo de atendimento, marca cada tipo de atendimento
    it('Selecionar tipo de atendimento atraves de radiobox, marca cada tipo de atendimento', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type(varEmail)
        cy.get('#phone-checkbox').check()
        cy.get('#phone').type('4796584444').should('have.value', '4796584444')
        cy.get('#open-text-area').type(varLongText, { delay: 0})
        cy.get('#product')
            .select('youtube')
            .should('have.value', 'youtube')
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio){
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
                })
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
  })

