(function() {var implementors = {};
implementors["hyper"] = ["impl <a class='trait' href='hyper/server/trait.Service.html' title='hyper::server::Service'>Service</a> for <a class='struct' href='hyper/client/struct.HttpConnector.html' title='hyper::client::HttpConnector'>HttpConnector</a>","impl&lt;C, B&gt; <a class='trait' href='hyper/server/trait.Service.html' title='hyper::server::Service'>Service</a> for <a class='struct' href='hyper/client/struct.Client.html' title='hyper::client::Client'>Client</a>&lt;C, B&gt; <span class='where'>where C: <a class='trait' href='hyper/client/trait.Connect.html' title='hyper::client::Connect'>Connect</a>, B: <a class='trait' href='https://docs.rs/futures/0.1/futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a>&lt;Error=<a class='enum' href='hyper/error/enum.Error.html' title='hyper::error::Error'>Error</a>&gt; + 'static, B::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
