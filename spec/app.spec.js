'use strict'
describe("app namespace", function() {
  bootstrap();
  it("should be defined", function() {
    expect(app).toBeDefined();
  });
  it("should have have a FormView instance", function(){
    expect(app.formView).toEqual(jasmine.any(FormView));
  });
  it("should have a UserDataView instance", function(){
    expect(app.userData).toEqual(jasmine.any(UserDataView));
  })
});