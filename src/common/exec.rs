use std::fmt;
use std::sync::Arc;

use futures::future::{Executor, Future};

/// Either the user provides an executor for background tasks, or we use
/// `tokio::spawn`.
#[derive(Clone)]
pub(crate) enum Exec {
    Default,
    Executor(Arc<Executor<Box<Future<Item=(), Error=()> + Send>> + Send + Sync>),
}


impl Exec {
    pub(crate) fn execute<F>(&self, fut: F) -> ::Result<()>
    where
        F: Future<Item=(), Error=()> + 'static,
    {
        ::tokio::executor::current_thread::spawn(fut);
        Ok(())
    }
}

impl fmt::Debug for Exec {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        f.debug_struct("Exec")
            .finish()
    }
}
