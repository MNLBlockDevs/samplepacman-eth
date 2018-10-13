const fabricContractObj = artifacts.require("Fabric");

contract('Fabric Test: Synchronous', function(accounts) {
    let fabricContractInstance;

    it("Fetch 3D point on Fabric", function () {
        return fabricContractObj.deployed().then(function(instance) {
            fabricContractInstance = instance;

            // call some function to fetch a location on the fabric
            return fabricContractInstance;
        }).then(function() {
            // assert the result to equal some condition
            assert.equal(3, 3, "not equal")
        })
    })
})