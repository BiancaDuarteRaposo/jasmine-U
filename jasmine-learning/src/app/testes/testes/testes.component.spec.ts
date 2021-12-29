import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesComponent } from './testes.component';

describe('TestesComponent', () => {
  let component: TestesComponent;
  let fixture: ComponentFixture<TestesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // -------------------------- MEUS TESTES ------------------------------------
  // cada Describe é um Suite
  //describe('MEUS TESTES', () => {
  // cada it é um (Spec)
  it('Deve garantir que 1+2=3', () => {
    expect(1 + 2).toBe(3);
  });
  it('Deve garantir que 1+1 não é 3', () => {
    // expect é uma verificação(Expectations)
    expect(1 + 1).not.toBe(3);
  });

  // ----- MATCHERS -------
  // ***São funçoes que retornam um valor booleano para ser verificado através de uma expectation(verificação).
  // ***É possivel criar seu proprio matcher.
  // ***Todo matcher pode ser negado com .not
  // Exs: .toBe .toEqual ....

  // ______ .TOBE __________________________________________________________
  // ** Comparação de ===, valor e tipo do objeto
  it('Deve validar o uso do toBe', () => {
    expect(true).toBe(true); // compara valor
    expect('exemplo').toBe('exemplo'); // compara "==="

    // let obj1 ={ valor:true }
    // let obj2 ={ valor:true }
    //expect(obj1).toBe(obj2); // compara "===" e não são o a mesma variavel entao não vai passar o teste
  });

  // ______ .TOEQUAL __________________________________________________________
  // ** Comparação de valores literais
  it('Deve validar o uso do toEqual', () => {
    let obj1 = { valor: true };
    let obj2 = { valor: true };
    expect(obj1).toEqual(obj2); //  não são o a mesma variavel, mas vai passar pois o VALOR é igual
  });

  // ______ .TOMATCH __________________________________________________________
  // ** Comparação de textos, expressoes regulares
  it('Deve validar o uso do toMatch', () => {
    let texto = 'Exemplo de texto Jasmine';
    expect(texto).toMatch('Jasmine'); //  vai procurar a palavra exatamente
    expect(texto).toMatch(/jasmine/i); //  com a expressão regular vai procurar a palavra caseinsencitive*-*-*-*-*-*-*-*-*-
    expect("12345-456").toMatch(/^\d{5}-\d{3}$/); //  com a expressão regular vai procurar o formato do CEP 
  });

  // });
});
