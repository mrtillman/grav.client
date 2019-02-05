module.exports = function GravXML(email, password){
  return {  

    grav_exists: function(hash){

      return `<methodCall>
                <methodName>grav.exists</methodName>
                <params>
                  <param><value><struct>
                    <member>
                      <name>hashes</name>
                      <value>
                        <array>
                          <data>
                            <value>${hash}</value>
                          </data>
                        </array>
                      </value>
                    </member>
                    <member>
                      <name>password</name>
                      <value>
                        <string>${password}</string>
                      </value>
                    </member>
                  </struct></value></param>
                </params>
              </methodCall>`;

    },

    grav_addresses: function(){

      return `<methodCall>
                <methodName>grav.addresses</methodName>
                <params>
                  <param><value><struct>
                    <member>
                      <name>password</name>
                      <value>
                        <string>${password}</string>
                      </value>
                    </member>
                  </struct></value></param>
                </params>
              </methodCall>`;

    },

    grav_userImages: function (){
      return `<methodCall>
              <methodName>grav.userimages</methodName>
              <params>
                <param><value><struct>
                  <member>
                    <name>password</name>
                    <value>
                      <string>${password}</string>
                    </value>
                  </member>
                </struct></value></param>
              </params>
            </methodCall>`;
    },

    grav_saveUrl: function (imageUrl, rating = 0){
      return `<methodCall>
                <methodName>grav.saveUrl</methodName>
                <params>
                  <param><value><struct>
                    <member>
                      <name>url</name>
                      <value>
                        <string>${imageUrl}</string>
                      </value>
                    </member>
                    <member>
                      <name>rating</name>
                      <value>
                        <int>${rating}</int>
                      </value>
                    </member>
                    <member>
                      <name>password</name>
                      <value>
                        <string>${password}</string>
                      </value>
                    </member>
                  </struct></value></param>
                </params>
              </methodCall>`;
    },

    grav_useUserImage: function (imageName){
      return `<methodCall>
                <methodName>grav.useUserimage</methodName>
                <params>
                  <param><value><struct>
                    <member>
                      <name>userimage</name>
                      <value>
                        <string>${imageName}</string>
                      </value>
                    </member>
                    <member>
                      <name>addresses</name>
                      <value>
                        <array>
                          <data>
                            <value><string>${email}</string></value>
                          </data>
                        </array>
                      </value>
                    </member>
                    <member>
                      <name>password</name>
                      <value>
                        <string>${password}</string>
                      </value>
                    </member>
                  </struct></value></param>
                </params>
              </methodCall>`;
    },

    grav_removeImage: function (){
      return `<methodCall>
              <methodName>grav.removeImage</methodName>
              <params>
                <param><value><struct>
                  <member>
                    <name>addresses</name>
                    <value>
                      <array>
                        <data>
                          <value><string>${email}</string></value>
                        </data>
                      </array>
                    </value>
                  </member>
                  <member>
                    <name>password</name>
                    <value>
                      <string>${password}</string>
                    </value>
                  </member>
                </struct></value></param>
              </params>
            </methodCall>`;
    },

    grav_deleteUserImage: function (imageName){
      return `<methodCall>
              <methodName>grav.deleteUserimage</methodName>
              <params>
                <param><value><struct>
                  <member>
                    <name>userimage</name>
                    <value>
                      <string>${imageName}</string>
                    </value>
                  </member>
                  <member>
                    <name>password</name>
                    <value>
                      <string>${password}</string>
                    </value>
                  </member>
                </struct></value></param>
              </params>
            </methodCall>`;
    },

    grav_test: function (){
      return `<methodCall>
                <methodName>grav.test</methodName>
                <params>
                  <param><value><struct>
                    <member>
                      <name>password</name>
                      <value>
                        <string>${password}</string>
                      </value>
                    </member>
                  </struct></value></param>
                </params>
              </methodCall>`;
    },
   
  }
}